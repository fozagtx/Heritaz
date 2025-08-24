"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import Homepage from "@/components/Homepage";
import "@solana/wallet-adapter-react-ui/styles.css";
import { NetworkConfigurationProvider } from "@/contexts/NetworkConfigurationProvider";

const WalletConnectionProvider = dynamic(
  () => import("@/components/WalletConnectionProvider"),
  { ssr: false },
);

const Home: FC = () => {
  return (
    <NetworkConfigurationProvider>
      <WalletConnectionProvider>
        <Homepage />
      </WalletConnectionProvider>
    </NetworkConfigurationProvider>
  );
};

export default Home;
