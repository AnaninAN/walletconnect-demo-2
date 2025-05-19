import {
  useDisconnect,
  useAppKit,
  useAppKitAccount,
} from '@reown/appkit/react';

export const ActionButtonList = () => {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return (
    isConnected && (
      <div className="action-button-list">
        <button onClick={() => open()}>Open</button>
        <button onClick={handleDisconnect}>Disconnect</button>
      </div>
    )
  );
};
