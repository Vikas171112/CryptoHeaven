import React from "react";

function FaQ() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is cryptocurrency?
        </div>
        <div className="collapse-content">
          <p>
            Cryptocurrency is a type of digital or virtual currency that uses
            cryptography for security. Unlike traditional currencies, it
            operates on decentralized networks using blockchain technology.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How does blockchain technology work?
        </div>
        <div className="collapse-content">
          <p>
            Blockchain is a distributed ledger technology that records
            transactions across a network of computers. Each transaction is
            added to a block and linked to previous blocks, creating an
            immutable chain of records.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          What is Bitcoin?
        </div>
        <div className="collapse-content">
          <p>
            Bitcoin is the first decentralized cryptocurrency, launched in 2009
            by an anonymous person or group using the pseudonym Satoshi
            Nakamoto. It allows peer-to-peer transactions without the need for
            intermediaries like banks.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How can I buy cryptocurrency?
        </div>
        <div className="collapse-content">
          <p>
            You can buy cryptocurrency through exchanges like Binance, Coinbase,
            or Kraken. You'll need to create an account, verify your identity,
            and fund your account using traditional currencies.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          What is the difference between a coin and a token?
        </div>
        <div className="collapse-content">
          <p>
            A coin is a cryptocurrency that operates on its own blockchain
            (e.g., Bitcoin, Ethereum). A token, on the other hand, is built on
            an existing blockchain (e.g., ERC-20 tokens on Ethereum).
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Is cryptocurrency safe to invest in?
        </div>
        <div className="collapse-content">
          <p>
            Cryptocurrency investments can be highly volatile and carry risks.
            Always do your own research and invest only what you can afford to
            lose. Consider storing your crypto in secure wallets for added
            security.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200 rounded-lg mb-4">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          What is a cryptocurrency wallet?
        </div>
        <div className="collapse-content">
          <p>
            A cryptocurrency wallet is a tool that allows you to store, send,
            and receive cryptocurrencies. Wallets can be hardware-based (like
            Ledger or Trezor) or software-based (like MetaMask or Trust Wallet).
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaQ;
