"use client";

import { FC } from 'react';
import { useNetworkConfiguration } from '@/contexts/NetworkConfigurationProvider';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const NetworkSwitcher: FC = () => {
  const { networkConfiguration } = useNetworkConfiguration();

  const handleNetworkSwitch = () => {
    toast.error("Mainnet functionality is under development");
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleNetworkSwitch}>
      {networkConfiguration === WalletAdapterNetwork.Devnet ? 'Devnet' : 'Mainnet'}
    </Button>
  );
};