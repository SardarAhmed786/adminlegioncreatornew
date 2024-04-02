import React from 'react'
import { useCallback } from 'react'
import Environment from '../../utils/Environment';
import {  signHelper } from '../../utils/contractHelpers';
import useWeb3 from '../useWeb3';
import { useWeb3React } from '@web3-react/core';

const GetSigner = () => {

    let { account } = useWeb3React();
    const web3 = useWeb3();

    const contractAddress = Environment?.launchpadFactoryContract;
    const contract = signHelper(contractAddress, web3);
    console?.log(contract, "contract funss");

    const getSignerHook = useCallback(
        async () => {
            console.log("in sign hook")

            try {
                const response = await contract?.methods?.signer()?.call({ from: account })
                return response;
            } catch (error) {
                console.log("error in sign hook", error)
                throw error
            }
        }
    );

    return { getSignerHook: getSignerHook }
}

export default GetSigner