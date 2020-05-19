import "./styles.css";

import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("e968e6c4-1e6d-4eb9-93c8-60a6f2c49fdb", "kovan", {
  gasRelay: true
});
const web3 = new Web3(portis.provider);

document.getElementById("showPortis").onclick = () => portis.provider.enable();
document.getElementById("showAddress").onclick = () =>
  web3.eth.getAccounts((error, accounts) => {
    document.getElementById("AddressPlaceholder").innerHTML = accounts[0];
  });

portis.onLogin(
  walletAddress =>
    (document.getElementById("onLoginPlaceholder").innerHTML =
      walletAddress + " has logged in!")
);
