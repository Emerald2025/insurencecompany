import { http, createConfig } from "wagmi";
import { mainnet, sepolia, polygonZkEvmTestnet, hardhat, polygon } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

const connectors =
  typeof window !== "undefined"
    ? [
        injected(),
        coinbaseWallet({ appName: "insurancecompany" }),
        walletConnect({ projectId: "606e1cdf0a44ef3e07512e4b34450293"}),
      ]
    : [];

export const config = createConfig({
  chains: [mainnet, sepolia, polygonZkEvmTestnet, hardhat, polygon],
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygonZkEvmTestnet.id]: http(),
    [hardhat.id]: http(),
    [polygon.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
