import { useWeb3React } from '@web3-react/core';
import React, { useCallback, useEffect } from 'react';
import useWeb3 from '../useWeb3';
import { cfiCollectionHelper } from '../../utils/contractHelpers';
import Environment from '../../utils/Environment';
import { toast } from 'react-toastify';

const FetchBaseURL = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();

    const contractAddress = Environment?.cfiCollection;
    const contract = cfiCollectionHelper(contractAddress, web3);
    console.log("🚀 ~ file: fetchBaseURL.js:13 ~ FetchBaseURL ~ contractAddress:, fetchBaseUrlHook", contractAddress, contract)

    // const fetchBaseUrlHook = useCallback(
    //     async (num) => {
    //         console.log("Calling fetchBaseUrlHook with token ID:", num);

    //         try {
    //             if (account) {
    //                 // Estimate gas with a default gas limit (adjust as needed)
    //                 const gas = await contract.methods.tokenURI(num).estimateGas({ from: account, gas: 500000 });

    //                 // Convert gas price to wei using web3.utils.toWei
    //                 const gasPrice = web3.utils.toWei('2', 'gwei'); // Adjust as needed

    //                 const returnRes = await contract.methods.tokenURI(num).call({
    //                     from: account,
    //                     gas: gas,
    //                     gasPrice: gasPrice,
    //                 });

    //                 console.log("fetchBaseUrlHook result:", returnRes);
    //                 return returnRes;
    //             }
    //         } catch (error) {
    //             console.error("Error in fetchBaseUrlHook:", error);
    //             toast?.error(error?.message);
    //             throw error;
    //         }
    //     },
    //     [account, contract]
    // );

    const fetchBaseUrlHook = useCallback(
        async (num) => {
            try {
                    const returnRes = await contract.methods.tokenURI(num).call();
                    console.log("fetchBaseUrlHook result:", returnRes);
                    return returnRes;
            } catch (error) {
                console.error("Error in fetchBaseUrlHook:", error);
                toast?.error(error?.message);
                throw error;
            }

            // return response
        },
        [contract]
    );

    return { fetchBaseUrlHook: fetchBaseUrlHook };
};

export default FetchBaseURL;