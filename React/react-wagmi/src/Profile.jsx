import { useConnect, useAccount, useDisconnect, useEnsAvatar, useEnsName, useNetwork, useBalance } from 'wagmi'
 
export function Profile() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

    const { disconnect } = useDisconnect()
    const { chain, chains } = useNetwork()


    const { address, connector, isConnected } = useAccount()
    // const { data: ensAvatar } = useEnsAvatar({ address })
    // const { data: ensName } = useEnsName({ address })

    const { data: balance, isError: balanceError, isLoading: balanceLoading } = useBalance({
      address: address,
    })
  

    console.log(balance, balanceError ,balanceLoading,  "chain information information's")
    if (isConnected) {
        return (
          <div>
            <div>{ address}</div>
            <div>Connected to {connector?.name}</div>
            <button onClick={disconnect}>Disconnect</button>
          </div>
        )
      }
    
  return (
    <div>
    {connectors.map((connector) => (
      <button
        disabled={!connector.ready}
        key={connector.id}
        onClick={() => connect({ connector })}
      >
        {connector.name}
        {!connector.ready && ' (unsupported)'}
        {isLoading &&
          connector.id === pendingConnector?.id &&
          ' (connecting)'}
      </button>
    ))}

    {error && <div>{error.message}</div>}
  </div>
  )
}