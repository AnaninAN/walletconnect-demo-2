import {
  useAppKitAccount,
  useWalletInfo,
  useAppKitBalance,
} from '@reown/appkit/react';
import { useEffect, useState } from 'react';

export const InfoList = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletInfo } = useWalletInfo();
  const { fetchBalance } = useAppKitBalance();

  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (isConnected) {
      fetchBalance().then((result) => {
        if (result.isSuccess && result.data) {
          setBalance(result.data.balance.toString());
        }
      });
    } else {
      setBalance(null);
    }
  }, [isConnected, fetchBalance]);

  return (
    <section>
      <h2>Debug Information</h2>
      <pre>
        {`"connected": ${isConnected.toString()}`}
        <br />
        {`"walletName": ${walletInfo?.name || null}`}
        <br />
        {`"address": ${address || null}`}
        <br />
        {`"balance": ${balance || null}`}
      </pre>
    </section>
  );
};
