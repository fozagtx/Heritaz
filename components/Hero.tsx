import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export const Hero = () => {
  return (
    <div className="space-y-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <div className={cn(
          "group rounded-full border border-primary/30 bg-background text-sm text-primary transition-all ease-in hover:border-primary/50"
        )}>
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-0.5 transition ease-out">
            <span>✨ Currently in beta</span>
            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h1 className="text-6xl font-bold text-primary tracking-tight">
          Heritaz
        </h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        The next generation of digital asset inheritance.
        <br />
        Secure, automated, and decentralized on Solana.
      </p>
      <div className="inline-block">
        <Button variant="dark" asChild>
            <WalletMultiButton />
          </Button>
      </div>
    </div>
  );
}; 