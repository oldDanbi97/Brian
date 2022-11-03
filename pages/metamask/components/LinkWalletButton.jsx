import React, {useState} from 'react';
import {useWeb3React} from "@web3-react/core";
import {injected} from "../../../lib/connectors";

const LinkWalletButton = () => {
  const {
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();
  const handleConnect = () => {
    console.log(process.env.NEXT_PUBLIC_DEEP_LINK)
    if (active) {
      deactivate();
      console.log('disconnect wallet')
    } else {
      activate(injected, (error) => {
        if(/No Ethereum provider was found on window.ethereum/.test(error)) {
          window.open(`https://metamask.app.link/dapp/${process.env.NEXT_PUBLIC_DEEP_LINK}/`);
        }
      })
    }
  }
  return (
    <>
      <p>{account}</p>
      <button onClick={handleConnect}>
        connect wallet
      </button>
    </>
  );
};

export default LinkWalletButton;