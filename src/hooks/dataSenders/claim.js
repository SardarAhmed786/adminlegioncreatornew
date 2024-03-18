import { useCallback } from 'react';
import Environment from '../../utils/Environment';
import { AmbassadorsClaimHelper } from '../../utils/contractHelpers';
import useWeb3 from '../useWeb3';
import { useWeb3React } from '@web3-react/core';

const ClaimAb = () => {

    let { account } = useWeb3React();
    const web3 = useWeb3();

    const contractAddress = Environment?.AmbassadorsClaim;
    const contract = AmbassadorsClaimHelper(contractAddress, web3);
    // console.log("🚀 ~ ClaimAb ~ contract:", contract?.methods?.setClaimAddresses, contract)


    const claimApproveHook = useCallback(
        async (address, type, amount) => {
            // console.log("🚀 ~ claim req in hook asd asd", address, type, amount)

            // console.log('contract payload in hook', [address?.toString()], type == 'LGX' ? [0] : [amount], type == 'USDT' ? [0] : [amount]);

            try {
                const response = await contract?.methods?.setClaimAddresses([address?.toString()], type == 'LGX' ? [0] : [amount], type == 'USDT' ? [0] : [amount])?.send({
                    from: account
                })
                return response
            } catch (error) {
                console.log("🚀 ~ file: placeABid.js:30 ~ error: accept a bid", error)
                throw error
            }
        }, [web3, contract]
    );

    return { claimApproveHook: claimApproveHook }
}

export default ClaimAb