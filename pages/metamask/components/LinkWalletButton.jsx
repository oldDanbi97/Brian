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
    if (active) {
      deactivate();
      console.log('disconnect wallet')
    } else {
      activate(injected, (error) => {
        if(/No Ethereum provider was found on window.ethereum/.test(error)) {
          window.open('https://metamask.app.link/dapp/192.168.200.95:3000/');
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