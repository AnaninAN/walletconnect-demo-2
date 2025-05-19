import './App.css';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from '@reown/appkit/networks';

import { ActionButtonList } from './components/ActionButtonList';
import { InfoList } from './components/InfoList';

import { projectId, metadata } from './config';

const queryClient = new QueryClient();

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet],
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet],
  projectId,
  metadata,
  features: {
    analytics: true,
  },
  defaultNetwork: mainnet,
});

function App() {
  return (
    <div>
      <h1>Walletconnect Demo</h1>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <div className="appkit-button-container">
            <appkit-button />
            <ActionButtonList />
          </div>
          <InfoList />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
