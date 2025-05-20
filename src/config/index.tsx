import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { base } from '@reown/appkit/networks';
import type { AppKitNetwork } from '@reown/appkit/networks';

export const projectId =
  import.meta.env.VITE_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const metadata = {
  name: 'AppKit Demo',
  description: 'AppKit Example Application',
  url: 'https://walletconnect-demo-2.vercel.app/',
  icons: [
    'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg',
  ],
};

export const networks = [base] as [AppKitNetwork, ...AppKitNetwork[]];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
});

export const DEFAULT_RECIPIENT =
  import.meta.env.VITE_DEFAULT_RECIPIENT ||
  '0x0000000000000000000000000000000000000000';

export const config = wagmiAdapter.wagmiConfig;
