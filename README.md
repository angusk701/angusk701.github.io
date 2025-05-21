# 🏇 Horse Racing Betting DApp

## Overview

This is a decentralized horse racing betting platform built on Ethereum. Users can place bets on registered horses, and winnings are distributed automatically by a smart contract. The DApp features a user-friendly frontend and robust security controls.


## Ethereum Testnet

**Network Used:**
`Sepolia Testnet`

- All smart contract interactions and frontend demonstrations are conducted on the Sepolia Ethereum testnet.
- You will need Sepolia ETH (available from a faucet) and a Web3 wallet such as MetaMask to interact with the DApp.


## Live Demo

**Deployed Frontend:**
[https://angusk701.github.io/](https://angusk701.github.io/)

- The live frontend is deployed via GitHub Pages.
- Connect your MetaMask wallet (set to Sepolia) to interact with the application.
- All non-owner contract functions—including betting and withdrawals—can be tested live.


## Usage Instructions

1. **Connect MetaMask** (ensure you are on the Sepolia testnet).
2. **Add Horses:** Only the contract owner can add or remove horses before betting starts.
3. **Place Bets:** Any user can bet on available horses by specifying the horse ID and amount (minimum 0.001 ETH).
4. **Settle Race:** The owner declares the winning horse and distributes winnings.
5. **Withdraw:** Users and the owner can withdraw their winnings and house take, respectively.
6. **Start New Race:** The owner can reset the race for a new round.


