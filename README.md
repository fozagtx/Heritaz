# Heritaz

Heritaz is a decentralized inheritance protocol for the Solana blockchain. It allows an asset holder to lock tokens in an on-chain escrow and to define a beneficiary who may claim those assets if the original holder is inactive for a predefined period.

## Purpose

In the traditional financial system, estate planning ensures that wealth can be transferred upon death or incapacity. Cryptocurrencies lack an equivalent safety net; private keys can be lost forever, making assets inaccessible. Heritaz provides an on-chain alternative that keeps custody with the owner until an inactivity timer expires, after which a beneficiary can take possession.

## How it works

1. Connect a Solana wallet.
2. Specify a beneficiary address.
3. Select the assets (SOL or SPL tokens) and the inactivity window.
4. Sign a transaction that locks the assets in an Anchor-based escrow account.
5. Periodically submit a lightweight check-in transaction to reset the timer.
6. If no check-in occurs before the deadline, the beneficiary can execute `claim` to receive the assets.
7. Until the deadline, the owner can cancel the switch and regain full control.

## Features

- Non-custodial escrow contract written with Anchor
- Supports multiple assets (SOL and SPL tokens)
- Configurable inactivity period
- Low transaction fees on Solana
- Fully open source and auditable

## Smart contract interface (simplified)

```text
initialize(owner, beneficiary, timeout)
deposit(amount)
checkin()
claim()
cancel()
```

Refer to `switch/programs/switch/src/lib.rs` for the complete specification.

## Running locally

<<<<<<< HEAD
```bash
git clone https://github.com/4ozan/Heritaz.git
cd Heritaz
bun install
bun dev
```

The front-end is built with Next.js 14, TypeScript, Tailwind CSS, and the Solana Wallet Adapter. The smart contract resides in the `switch/` directory and can be tested with Anchor.
