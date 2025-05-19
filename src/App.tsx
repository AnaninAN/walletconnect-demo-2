import './App.css';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

import { ActionButtonList } from './components/ActionButtonList';
import { InfoList } from './components/InfoList';

import { projectId, metadata, networks } from './config';

const queryClient = new QueryClient();

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
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
