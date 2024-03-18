import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useToast } from "../state/hooks";
import { connectorsByName } from "../utils/web3React";
import { setupNetwork } from "../utils/wallet";

const useAuth = () => {
  const { toastError } = useToast();

  const login = async (connectorID, chain) => {
    // console.log("---------->", connectorID);

    // console.log("---------->", connectorsByName);

    // console.log("AAAAAA", connectorID)

    const connector = connectorsByName[connectorID];
    // console.log("---------->", connector);
    if (connector) {
      // console.log("connector",connector)
      if (chain === '1') {
        console.log(chain, 'eeeeeeeee');
        const hasSetup = await setupNetwork(chain);
        console.log(hasSetup, 'hasSetup');
        if (hasSetup) {

          await connector.activate(parseInt(chain))
        }
      } else if (chain === '56') {
        console.log(chain, 'eeeeeeeee');
        const hasSetup = await setupNetwork(chain);
        console.log(hasSetup, 'hasSetup');
        if (hasSetup) {

          await connector.activate(parseInt(chain))
        }
      }
      else {
        await connector.activate(parseInt(chain))
      }

    } else {
      toastError("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const logout = async (connectorID) => {
    const connectorId = window.localStorage.getItem("connectorId")
    // console.log("disssss",connectorId)
    const connector = connectorsByName[connectorId];
    // console.log("disssss",connector)
    if (connector) {
      if (connector?.deactivate) {
        await connector.deactivate()
      } else {
        await connector.resetState()
      }
      // await connector.deactivate()
    } else {
      toastError("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return { login, logout };
};

export default useAuth;
