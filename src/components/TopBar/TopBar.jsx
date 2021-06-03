import React, { useState, useCallback, } from 'react';
import Address from "../Address";
import Social from "../Social";
import { StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import "./topbar.scss";

import { shorten, trim, getRebaseBlock, secondsUntilBlock, prettifySeconds } from '../../helpers';


function TopBar({ web3Modal, loadWeb3Modal, logoutOfWeb3Modal,  route, setRoute, address, mainnetProvider, blockExplorer }) {

  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <button type="button" className={`btn btn-dark btn-overwrite-primer m-2`} onClick={logoutOfWeb3Modal}>Disconnect</button>,
      );
    } else {
      modalButtons.push(
        <button type="button" className={`btn btn-dark btn-overwrite-primer m-2`} onClick={loadWeb3Modal}>Connect Wallet</button>,
      );
    }
  }


  return (
    <div className="dapp-topbar">
			
				<div className="wallet-menu">
					{address && <a href={`https://etherscan.io/address/${address}`} target="_blank">
						{shorten(address)}
					</a>}

					{modalButtons}
				</div>
			
    </div>
  );
}

export default TopBar;
