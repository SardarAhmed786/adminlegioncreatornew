import React from 'react'
import { useCallback } from 'react'
import Environment from '../../utils/Environment';
import { wethTokenHelper } from '../../utils/contractHelpers';
import useWeb3 from '../useWeb3';
import { useWeb3React } from '@web3-react/core';

const AllowanceWeth = () => {

    let { account } = useWeb3React();
    const web3 = useWeb3();

    const contractAddress = Environment?.wethToken;
    const cfiMarketplaceAddress = Environment?.marketplaceContract;

    const contract = wethTokenHelper(contractAddress, web3);

    const allowanceWethHook = useCallback(
        async () => {
            console.log("🚀 ~ file: placeABid.js:21 ~ id, bidPrice: place a bid", 0, cfiMarketplaceAddress)

            try {
                const response = await contract?.methods?.allowance(account, cfiMarketplaceAddress)?.call()
                return response
            } catch (error) {
                console.log("🚀 ~ file: placeABid.js:30 ~ error: place a bid", error)
                throw error
            }
        }
    );

    return { allowanceWethHook: allowanceWethHook }
}

export default AllowanceWeth