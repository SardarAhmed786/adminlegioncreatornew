import React from 'react'
import { useCallback } from 'react'
import Environment from '../../utils/Environment';
import { cfiCollectionHelper, wethTokenHelper } from '../../utils/contractHelpers';
import useWeb3 from '../useWeb3';
import { useWeb3React } from '@web3-react/core';

const NftOwnerOf = () => {

    let { account } = useWeb3React();
    const web3 = useWeb3();

    const contractAddress = Environment?.cfiCollection;
    const contract = cfiCollectionHelper(contractAddress, web3);

    const nftOwnerOfHook = useCallback(
        async (id) => {
            console.log("🚀 ~ file: placeABid.js:21 ~ id, bidPrice: place a bid", id)

            try {
                const response = await contract?.methods?.ownerOf(id)?.call({ from: account })
                return response
            } catch (error) {
                console.log("🚀 ~ file: placeABid.js:30 ~ error: place a bid", error)
                throw error
            }
        }
    );

    return { nftOwnerOfHook: nftOwnerOfHook }
}

export default NftOwnerOf