import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import logo from '../components/Logo';
import walletstyle from '../sections/styles/wallet.module.css';

function App() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const balance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <div className={walletstyle.App}>
      <header className={walletstyle.Appheader}>
        {haveMetamask ? (
          <div className={walletstyle.Appheader}>
            {isConnected ? (
              <div className={walletstyle.card}>
                <div className={walletstyle.cardrow}>
                  <h3>Wallet Address:</h3>
                  <p>
                    {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}
                  </p>
                </div>
                <div className={walletstyle.cardrow}>
                  <h3>Wallet Balance:</h3>
                  <p>{accountBalance}</p>
                </div>
              </div>
            ) : (
              <img src={logo} className={walletstyle.Applogo} alt="logo" />
            )}
            {isConnected ? (
              <p className={walletstyle.info}> Connected Successfully</p>
            ) : (
              <button className={walletstyle.btn} onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
        ) : (
          <p>Please Install MataMask</p>
        )}
      </header>
    </div>
  );
}

export default App;
