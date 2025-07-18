import { NetworkSwitcher } from '@/components/NetworkSwitcher';
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

const DeadManSwitch = dynamic(
  () => import('@/components/DeadManSwitch'),
  { ssr: false }
);

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-card/50 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-medium text-primary">
              Heritaz
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-muted text-muted-foreground border border-border">
              Dashboard
            </span>
            <NetworkSwitcher />
          </div>
          <WalletMultiButton className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !rounded-lg !text-sm transition-colors" />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-card/50 rounded-lg border border-border p-6">
          <DeadManSwitch />
        </div>
      </main>
    </div>
  );
}; 