import { useAppKitAccount } from '@reown/appkit/react';
import { useWalletClient } from 'wagmi';
import { usePay } from '@reown/appkit-pay/react';
import { baseETH } from '@reown/appkit-pay';

import { DEFAULT_RECIPIENT } from '../config';

export const TransferButton = () => {
  const { isConnected } = useAppKitAccount();
  const { data: walletClient } = useWalletClient();

  const handleSuccess = (data: unknown) => {
    console.log('Payment successful:', data);
  };

  const handleError = (error: unknown) => {
    console.error('Payment error:', error);
  };

  const {
    open: openPay,
    isPending,
    isSuccess,
    data,
    error,
  } = usePay({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const handleTransfer = async () => {
    if (!walletClient) {
      console.error('Wallet client not available');
      return;
    }

    await openPay({
      recipient: DEFAULT_RECIPIENT,
      amount: 1,
      paymentAsset: baseETH,
    });
  };

  const isDisabled = !isConnected || !walletClient;

  if (isSuccess || isPending || error) {
    if (isSuccess) console.log('Payment successful:', data);
    if (isPending) console.log('Payment pending:', data);
    if (error) console.log('Payment error:', error);
  }

  return (
    isConnected && (
      <>
        <button
          onClick={handleTransfer}
          className="transfer-button"
          disabled={isDisabled}
        >
          Transfer 1 ETH
        </button>
      </>
    )
  );
};
