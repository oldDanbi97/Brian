import '../styles/globals.css'
import BrianLayout from "../components/common/BrianLayout";
import {Web3Provider} from "@ethersproject/providers";
import {Web3ReactProvider} from '@web3-react/core';
import {RecoilRoot} from "recoil";

function MyApp({ Component, pageProps }) {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    return library;
  };
  return (
    <RecoilRoot>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrianLayout>
          <Component {...pageProps} />
        </BrianLayout>
      </Web3ReactProvider>
    </RecoilRoot>
    )
}

export default MyApp
