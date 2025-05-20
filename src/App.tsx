import './App.css';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ActionButtonList } from './components/ActionButtonList';
import { InfoList } from './components/InfoList';

import { projectId, metadata, wagmiAdapter, networks } from './config';

const queryClient = new QueryClient();

const generalConfig = {
  projectId,
  networks,
  metadata,
};

createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    analytics: true,
    pay: true,
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
