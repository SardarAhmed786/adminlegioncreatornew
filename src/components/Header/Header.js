import "./header.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core/dist';
import useAuth from '../../hooks/useAuth';
import toasts from "../../state/toasts";
import Signature from "../../utils/userSign";


const Header = () => {

  let { account } = useWeb3React();
  const { login, logout } = useAuth();

  const { userSign } = Signature();

  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [userSigns, setUserSing] = useState(null)


  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };


  const connectMetamask = async (e) => {
    if (isMetaMaskInstalled) {
      setLoader(true);
      console.log(e, 'eeeeeeeee');
      handleClose();
      if (account) {
        const connectorId = window.localStorage.getItem("connectorId")
        await logout(connectorId);
        localStorage.removeItem("connectorId");
        localStorage.removeItem("flag");
      } else {
        await login("injected", e);
        localStorage.setItem("connectorId", "injected");
        localStorage.setItem("flag", "true");
        localStorage.setItem("chain", e);
        setLoader(false);
      }
      setLoader(false);
    } else {
      toasts.error("Metamask does not exist, please install it.");
      handleClose();
    }
  };

  const trustWallet = async () => {
    setLoader(true)
    console.log('startt trust.....');
    handleClose();
    if (account) {
      await logout("walletconnect");
    } else {
      let a = await login("walletconnect");
      console.log(a, 'aaaaa');
      localStorage.setItem('connectorId', 'walletconnect');
      localStorage.setItem("flag", "true");
    }
    setLoader(false);
  };

  const logoutHandle = async () => {
    const connectorId = window.localStorage.getItem("connectorId")
    logout(connectorId)
    localStorage.removeItem('connectorId')
    localStorage.removeItem('flag')
    localStorage.removeItem('chain')
  }


  const gettingSign = async () => {
    console.log('in sign funcationnnnn');
    if (account) {
      const res1 = await userSign();
      console.log(res1, 'res1 okokokok');
      setUserSing(res1)

      if (res1) {
        localStorage.setItem('sign', res1)
        localStorage.setItem('userAddress', account)
      }
    }
  }


  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      setIsMetaMaskInstalled(true);

      // You can also check the network if needed
      console.log('Current network:', window.ethereum.networkVersion);
    } else {
      console.log('MetaMask is not installed!');
      setIsMetaMaskInstalled(false);
    }
  }, []);


  return (
    <>
      {/* {loader && <Loader />} */}
      <section className="main-navbar">
        <div className="custom-container">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/"><img src="\logo.svg" alt="img" className='img-fluid' /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1462_2956)">
                  <path d="M3 17.98C3 18.5323 3.44772 18.98 4 18.98H20C20.5523 18.98 21 18.5323 21 17.98C21 17.4277 20.5523 16.98 20 16.98H4C3.44772 16.98 3 17.4277 3 17.98ZM3 12.98C3 13.5323 3.44772 13.98 4 13.98H20C20.5523 13.98 21 13.5323 21 12.98C21 12.4277 20.5523 11.98 20 11.98H4C3.44772 11.98 3 12.4277 3 12.98ZM4 6.97998C3.44772 6.97998 3 7.4277 3 7.97998C3 8.53227 3.44772 8.97998 4 8.97998H20C20.5523 8.97998 21 8.53227 21 7.97998C21 7.4277 20.5523 6.97998 20 6.97998H4Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1462_2956">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.97998)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              {/* <ul class="navbar-nav navbar-navvvvv  me-0 mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active for-a" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#partners">Explore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#tokenomics">Stats</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#roadmap">🚀 Launch with Legion</a>
                </li>
              </ul> */}
              <ul class="navbar-nav navbar-navv d-none me-0 mb-2 mb-lg-0">
                <li class="nav-item forsocial">
                  <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.2033 1.875H17.96L11.9375 8.75833L19.0225 18.125H13.475L9.13 12.4442L4.15833 18.125H1.4L7.84167 10.7625L1.045 1.875H6.73333L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90333 3.43833H4.26417L14.2358 16.475Z" fill="#F0FF40" />
                  </svg></a>
                  <a class="nav-link active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.5749 7.09689C15.1883 6.50241 15.7972 5.11529 13.2415 6.79965C10.854 8.39212 8.45037 9.96168 6.03089 11.5081C5.66246 11.6696 5.26416 11.7572 4.85991 11.7657C4.45565 11.7742 4.0538 11.7034 3.67848 11.5576C2.14502 11.1118 0.354872 10.5173 0.354872 10.5173C0.354872 10.5173 -0.86745 9.77313 1.22494 8.98049C1.22494 8.98049 10.0712 5.46207 13.1393 4.2225C14.3149 3.7271 18.303 2.14182 18.303 2.14182C18.303 2.14182 20.1443 1.44718 19.9909 3.13262C19.9398 3.82618 19.5309 6.25579 19.122 8.88141C18.5075 12.598 17.843 16.6624 17.843 16.6624C17.843 16.6624 17.7407 17.8018 16.8718 18C15.9416 17.9847 15.0428 17.6712 14.316 17.1083C14.1116 16.9597 10.4813 14.7293 9.15115 13.6394C9.01585 13.5506 8.90592 13.43 8.83161 13.289C8.75729 13.1479 8.72099 12.9909 8.7261 12.8326C8.7312 12.6743 8.77753 12.5198 8.86078 12.3835C8.94404 12.2472 9.06151 12.1335 9.20226 12.053C11.0266 10.4354 12.8178 8.783 14.5749 7.09689Z" fill="#F0FF40" />
                  </svg></a>
                </li>
                <li class="nav-item">
                  <Link to="/whitelist" class="nav-link active for-a" aria-current="page" >WHITELIST</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link connect-wallet" aria-current="page" href="#">Connect Wallet</a>
                </li>
              </ul>

              {
                account ?
                  <>
                    <button onClick={gettingSign}>Sign</button>
                    <button onClick={logoutHandle}>Disconnect</button>
                  </>
                  :
                  <button className="connect-btn" onClick={handleShow}>
                    Connect Wallet
                  </button>
              }
            </div>
          </nav>
        </div>
      </section>


      <Modal className="connectwallet-modal" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="twice-btns" >
            <button className="forhideee" onClick={connectMetamask}>
              <img src="\assets\metamask.svg" alt="img" className="img-fluid" />
              <h6>Metamask</h6>
            </button>
            <button onClick={trustWallet}>
              <img
                src="\assets\walletconnect.svg"
                alt="img"
                className="img-fluid"
              />
              <h6>WalletConnect</h6>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
