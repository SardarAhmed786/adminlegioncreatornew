import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import { getLibraryForSign } from "./web3React";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';
export const Signature = () => {
  const { account } = useWeb3React()
  var library = null;
  if (account) {
    library = getLibraryForSign(Web3.givenProvider);
  } else {
  }
  const sign = useCallback(async (stime, etime, IDO, acc, acct, ded) => {
    console.log(stime, etime, IDO, acc, acct, ded, 'in sign fileeeee');

    if ((library && account)) {
      let signing = library
        .getSigner(account);
      try {
        console.log('in sign file tryyyyyy');
        let signature = await signing.signMessage(stime, etime, IDO, acc, acct, ded);
        toast.success(`${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`, {
          position: "top-right",
          autoClose: 2000
        });
        return signature;
      }
      catch (error) {
        console.log("error", error)
        // toast.error(error && error.message, {
        //   position: "top-right",
        //   autoClose: 2000
        // });
      }
    }
  }, [account, library])
  return { userSign: sign }
}
export default Signature