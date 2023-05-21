export const formateBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(4);
  return balance;
};

export const formateChainId = (chainHex: string) => {
  const chainId = parseInt(chainHex, 16);
  return chainId;
};
