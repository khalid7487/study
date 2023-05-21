import "./App.css";
import { useEffect, useState } from "react";
import { formateBalance, formateChainId } from "./utils";

import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [wallet, setWallet] = useState(initialState);
  const [switchNetwork, setSwitchNetwork] = useState(false);

  // handling errors
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const refetchAccount = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        // if user already disconnected
        setWallet(initialState);
      }
    };

    const refetchChainId = (chainId: any) => {
      // If wallet is binance then set wallet otherwise switch network
      if (chainId === "0x61" || chainId === "0x38") {
        setWallet((wallet) => ({ ...wallet, chainId }));
        setSwitchNetwork(false);
      } else {
        setSwitchNetwork(true);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        refetchAccount(accounts);

        window.ethereum.on("accountsChanged", refetchAccount);
        window.ethereum.on("chainChanged", refetchChainId);
        window.ethereum.on("disconnect", handleDisconnect);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", refetchAccount);
      window.ethereum?.removeListener("chainChanged", refetchChainId);
    };
  }, []);

  const updateWallet = async (accounts: any) => {
    const balance = formateBalance(
      await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );

    const chainId = await window.ethereum!.request({
      method: "eth_chainId",
    });

    if (chainId === "0x61" || chainId === "0x38") {
      setWallet({ accounts, balance, chainId });
      setSwitchNetwork(false);
    } else {
      setSwitchNetwork(true);
      setWallet({ accounts, balance, chainId });
    }
  };

  const handleConnect = () => {
    setIsConnecting(true);
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: []) => {
        setError(false);
        updateWallet(accounts);
      })
      .catch((err: any) => {
        setError(true);
        setErrorMessage(err.message);
      });
    setIsConnecting(false);
  };

  const disableConnect = Boolean(wallet) && isConnecting;

  const handleDisconnect = async () => {
    setWallet(initialState);
  };

  // If we want to switch our network using btn clicked
  const handleSwitchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      // if (switchError.code === 4902) {
      //   // Do something
      // }
    }
  };

  return (
    <div className="App">
      <>
        {switchNetwork ? (
          <div>  <button onClick={handleSwitchNetwork}>Switch Network</button></div>
        ) : (
          <>
            <div>
              Injected Provider {hasProvider ? "Does" : "Does Not"} Exist
            </div>
            {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
              <button disabled={disableConnect} onClick={handleConnect}>
                Connect MetaMask
              </button>
            )}
            {wallet.accounts.length > 0 && (
              <>
                <div>Wallet Accounts: {wallet.accounts[0]}</div>
                <div>Wallet Balance: {wallet.balance}</div>
                <div>Hex ChainId: {wallet.chainId}</div>
                <div>Numeric ChainId: {formateChainId(wallet.chainId)}</div>
              </>
            )}

            {error && (
              <div onClick={() => setError(false)}>
                <strong>Error:</strong> {errorMessage}
              </div>
            )}

            <button onClick={handleDisconnect}>Disconnect Account </button>
          </>
        )}
      </>
    </div>
  );
}

export default App;
