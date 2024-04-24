import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../utils/loader/Loader';
import { Modal, Nav } from 'react-bootstrap';
// import DeployProject from '../../../hooks/dataSenders/deployProjectHook';
import { useWeb3React } from '@web3-react/core';
import Environment from '../../../utils/Environment';
import useWeb3 from '../../../hooks/useWeb3';
// import TokenDetails from '../../../hooks/dataFetchers/tokenDetails';
// import Approve from '../../../hooks/dataSenders/approve';

const Categories = () => {

    const { account } = useWeb3React();
    console.log("🚀 ~ Application ~ account:", account)
    const mytoken = localStorage.getItem('token');
    const [loader, setLoader] = useState(false);
    const [allApplications, setAllApplications] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [activeTab, setActiveTab] = useState('link-1');
    const [tokenDetailsArry, setTokenDetailsArry] = useState(null);
    console.log("🚀 ~ Application ~ tokenDetailsArry:", tokenDetailsArry)


    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
        setSearchInput("");
    }

    // pagenition============================

    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPage(selectedPage)
    };

    // pagenition============================

    const changeDateFormate = (getTime) => {
        const originalDate = new Date(getTime);

        // Format the date
        const formattedDate = originalDate.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });

        // Update the state with the formatted date
        return formattedDate;
    }

    const getAllApplicantsHandle = (filter) => {
        setLoader(true);

        axios.get(Environment?.backendUrl + `api5/launchpad/launchpadApplicationListing?search=${searchInput ? searchInput : ""}&filter=${filter ? filter : "pending"}&limit=${limit}&page=${page}`, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                setLoader(false);
                setAllApplications(response?.data?.data)
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
            .catch((err) => {
                setLoader(false);
                toast.error(err.response?.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    }

    // deploy project ===========================================
    const web3 = useWeb3();


    // Fetch token details ===============================================

    // const { tokenDetailsHook } = TokenDetails();

    // const claimTokenDetailsHandle = async (tokenAddress) => {
    //     setLoader(true);
    //     try {
    //         if (tokenAddress) {
    //             let res = await tokenDetailsHook(tokenAddress);
    //             console.log("🚀 ~ claimTokenDetailsHandle ~ res tokenDetailsArry:", res)
    //             setTokenDetailsArry(res);
    //             setLoader(false);
    //             return res;
    //         }
    //     } catch (error) {
    //         setLoader(false);
    //         console.log("🚀 ~ claimTokenDetailsHandle ~ error:", error)
    //         toast?.error(error);
    //     }
    // }

    // Fetch token details ===============================================

    // Approve tokens =====================================

    // const { approveTokens } = Approve();

    // const approveTokensHandle = async (tokenAddress) => {
    //     try {
    //         const approveRes = await approveTokens(tokenAddress);
    //         console.log("🚀 ~ approveTokensHandle ~ approveRes:", approveRes)
    //         return approveRes;
    //     } catch (error) {
    //         console.log("🚀 ~ approveTokensHandle ~ error:", error)
    //     }
    // }
    // Approve tokens =====================================

    // const { deployProjectHookCall } = DeployProject();

    // const deployProjectHandle = async (
    //     // adminLaunchpadApprovalAddress,
    //     signature,
    //     deadlineTime,
    //     createdAt,
    //     endTime,
    //     hardCap,
    //     softcap,
    //     tokenDecimals,
    //     numberOfIdoTokensToSell,
    //     publicSalePrice,
    //     numberOfVestings,
    //     vestingPercentages,
    //     tokenSaleVestingPeriod,
    //     tokenAddress,
    //     listingRate,
    //     tokenSender
    // ) => {
    //     // console.log("🚀 ~ Application ~ args: ",
    //     //     signature,
    //     //     deadlineTime,
    //     //     createdAt,
    //     //     endTime,
    //     //     hardCap,
    //     //     softcap,
    //     //     tokenDecimals,
    //     //     numberOfIdoTokensToSell,
    //     //     publicSalePrice,
    //     //     numberOfVestings,
    //     //     vestingPercentages,
    //     //     tokenSaleVestingPeriod,
    //     //     tokenAddress,
    //     //     listingRate,
    //     //     tokenSender
    //     // )

    //     let startepochTime = new Date(createdAt).getTime() / 1000; // Convert milliseconds to seconds
    //     let endepochTime = new Date(endTime).getTime() / 1000; // Convert milliseconds to seconds
    //     let dedlineepochTime = new Date(deadlineTime).getTime() / 1000; // Convert milliseconds to seconds

    //     // console.log("🚀 ~ Application ~ EndTimeInEpoch:", EndTimeInEpoch, endTime)

    //     // Convert tokenSaleVestingPeriod time milliseconds to seconds
    //     const isoString3 = tokenSaleVestingPeriod;
    //     const dtObject3 = new Date(isoString3);
    //     const VestingPeriodEpoch = dtObject3.getTime() / 1000;

    //     let deadline = dedlineepochTime;
    //     let _signer = account;
    //     let date = new Date();
    //     date.setMinutes(date.getMinutes() + 20);

    //     try {
    //         if (account) {
    //             const tokenBalanceRes = await claimTokenDetailsHandle(tokenAddress);
    //             console.log("🚀 ~ Application ~ tokenBalanceRes:", tokenBalanceRes)
    //             if (tokenBalanceRes[3] >= numberOfIdoTokensToSell) {
    //                 setLoader(true);
    //                 // console.log("🚀 ~ Application ~ signRes:", signature)
    //                 if (tokenBalanceRes[4] > numberOfIdoTokensToSell) {
    //                     console.log('in approve with contract', tokenBalanceRes[4]);
    //                     if (signature) {
    //                         var r = "0x" + signature.slice(2, 66);
    //                         var s = "0x" + signature.slice(66, 130);
    //                         var v = parseInt(signature.slice(130, 132), 16);
    //                         let publicSalePriceInWei = web3.utils.toWei(publicSalePrice?.toString(), "ether");
    //                         let listingRateInWei = web3.utils.toWei(listingRate?.toString(), "ether");

    //                         // console.log('signature and contract payload', v, '---', r, '---', s, '---',
    //                         //     signature,
    //                         //     vestingPercentages,
    //                         //     startepochTime,
    //                         //     endepochTime,
    //                         //     parseInt(hardCap),
    //                         //     parseInt(softcap),
    //                         //     tokenDecimals,
    //                         //     parseInt(numberOfIdoTokensToSell),
    //                         //     publicSalePriceInWei,
    //                         //     listingRateInWei,
    //                         //     numberOfVestings,
    //                         //     Number.parseInt(vestingPercentages),
    //                         //     Number.parseInt(VestingPeriodEpoch),
    //                         //     tokenAddress,
    //                         //     "0xF62849F9A0B5Bf2913b396098F7c7019b51A820a",
    //                         //     account
    //                         // );

    //                         const res = await deployProjectHookCall(
    //                             {
    //                                 startTime: startepochTime,
    //                                 endTime: endepochTime,
    //                                 hardcap: hardCap ? parseInt(hardCap) : 0,
    //                                 softcap: softcap ? parseInt(softcap) : 0,
    //                                 tokenDecimals: tokenDecimals || 18,
    //                                 _numberOfIdoTokensToSell: numberOfIdoTokensToSell ? parseInt(numberOfIdoTokensToSell) : 0,
    //                                 _tokenPriceInUSD: publicSalePrice > 0 ? publicSalePriceInWei : 0,
    //                                 _tokenListingPrice: listingRate > 0 ? listingRateInWei : 0,
    //                                 _numberOfVestings: numberOfVestings || 0,
    //                                 _vestingPercentages: numberOfVestings > 0 ? (Number.parseInt(vestingPercentages) ? [Number.parseInt(vestingPercentages)] : []) : [],
    //                                 _vestingUnlockTimes: numberOfVestings > 0 ? (Number.parseInt(VestingPeriodEpoch) ? [Number.parseInt(VestingPeriodEpoch)] : []) : [],
    //                                 tokenToIdo: tokenAddress,
    //                                 _usdt: "0xF62849F9A0B5Bf2913b396098F7c7019b51A820a",
    //                                 tokenSender: account,
    //                             },
    //                             _signer,
    //                             deadline,
    //                             v,
    //                             r,
    //                             s
    //                         );
    //                         if (res) {
    //                             setLoader(false);
    //                         }
    //                         console.log("🚀 ~ deployProjectHandle ~ res:", res)
    //                     } else {
    //                         setLoader(false);
    //                         toast?.error("Sign not get");
    //                     }
    //                 } else {
    //                     console.log('in approve without contract', tokenBalanceRes[4]);
    //                     const res = await approveTokensHandle(tokenAddress);
    //                     console.log("🚀 ~ Application ~ after approve res:", res)
    //                     if (res) {
    //                         console.log('after approve contract call', tokenBalanceRes[4]);
    //                         if (signature) {
    //                             var r = "0x" + signature.slice(2, 66);
    //                             var s = "0x" + signature.slice(66, 130);
    //                             var v = parseInt(signature.slice(130, 132), 16);
    //                             let publicSalePriceInWei = web3.utils.toWei(publicSalePrice?.toString(), "ether");
    //                             let listingRateInWei = web3.utils.toWei(listingRate?.toString(), "ether");

    //                             const res = await deployProjectHookCall(
    //                                 {
    //                                     startTime: startepochTime,
    //                                     endTime: endepochTime,
    //                                     hardcap: hardCap ? parseInt(hardCap) : 0,
    //                                     softcap: softcap ? parseInt(softcap) : 0,
    //                                     tokenDecimals: tokenDecimals || 18,
    //                                     _numberOfIdoTokensToSell: numberOfIdoTokensToSell ? parseInt(numberOfIdoTokensToSell) : 0,
    //                                     _tokenPriceInUSD: publicSalePrice > 0 ? publicSalePriceInWei : 0,
    //                                     _tokenListingPrice: listingRate > 0 ? listingRateInWei : 0,
    //                                     _numberOfVestings: numberOfVestings || 0,
    //                                     _vestingPercentages: numberOfVestings > 0 ? (Number.parseInt(vestingPercentages) ? [Number.parseInt(vestingPercentages)] : []) : [],
    //                                     _vestingUnlockTimes: numberOfVestings > 0 ? (Number.parseInt(VestingPeriodEpoch) ? [Number.parseInt(VestingPeriodEpoch)] : []) : [],
    //                                     tokenToIdo: tokenAddress,
    //                                     _usdt: "0xF62849F9A0B5Bf2913b396098F7c7019b51A820a",
    //                                     tokenSender: account,
    //                                 },
    //                                 _signer,
    //                                 deadline,
    //                                 v,
    //                                 r,
    //                                 s
    //                             );
    //                             if (res) {
    //                                 setLoader(false);
    //                             }
    //                             setLoader(false);
    //                             console.log("🚀 ~ deployProjectHandle ~ res:", res)
    //                         } else {
    //                             setLoader(false);
    //                             toast?.error("Sign not get");
    //                         }
    //                     }
    //                 }
    //             } else {
    //                 setLoader(false);
    //                 toast?.error("You don't have enough tokens in your wallet");
    //             }
    //             setLoader(false);
    //         } else {
    //             setLoader(false);
    //             toast?.error("Please connect your wallet");
    //         }
    //     } catch (error) {
    //         setLoader(false);
    //         console.log("🚀 ~ Application ~ error:", error)
    //     }
    // }

    // deploy project ===========================================

    useEffect(() => {
        getAllApplicantsHandle();
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            {loader && <Loader />}
            <div className='right'>
                <div className='uppercard'>
                    <div className='iii'>
                        <div className='iiitext'>
                            <h5>Categories</h5>
                            <p>Fund transaction</p>
                            {/* <button onClick={deployProjectHandle}>get sign </button> */}
                        </div>
                        <button onClick={handleShow}>Add Category</button>
                    </div>

                </div>
                {/* <div className='mainssss'>
                    <Nav variant="pills" className="w-100" activeKey={activeTab} onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => getAllApplicantsHandle("pending")}>Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => getAllApplicantsHandle("approve")}>Approve</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" onClick={() => getAllApplicantsHandle("rejected")}>Rejected</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div> */}


                <div className='parentcardmain'>
                    <div className='parentmains'>

                    </div>
                    <div className='main-card'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='tblheadss'>
                                    <tr>
                                        <th>Category</th>
                                        <th>Date Added</th>

                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='bold'>$100.32K</p>

                                        </td>

                                        <td><p className='bold'>2/12/2023</p></td>

                                        <td><button className='del11' onClick={handleShow2}>Delete</button></td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <p className='bold'>$100.32K</p>

                                        </td>

                                        <td><p className='bold'>2/12/2023</p></td>

                                        <td><button className='del11' >Delete</button></td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <p className='bold'>$100.32K</p>

                                        </td>

                                        <td><p className='bold'>2/12/2023</p></td>

                                        <td><button className='del11'>Delete</button></td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <p className='bold'>$100.32K</p>

                                        </td>

                                        <td><p className='bold'>2/12/2023</p></td>

                                        <td><button className='del11'>Delete</button></td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <p className='bold'>$100.32K</p>

                                        </td>

                                        <td><p className='bold'>2/12/2023</p></td>

                                        <td><button className='del11'>Delete</button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </div>


            <Modal className='addcatogory' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className='muinput'>
                        <div class="material-textfield">
                            <input placeholder="Category" />
                            <label>Category</label>
                        </div>

                    </div>
                    <div className='endbyuutons'>
                        <button className='canclelight'>Cancel</button>
                        <button className='savebtns' onClick={() => {
                            handleShow1();
                            handleClose();
                        }}>Save</button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal className='addcatogory1' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innercontent'>
                        <img src='\assets\greentick.svg' alt='img' className='img-fluid' />
                        <h3>Category successfully added</h3>
                        <button>Okay</button>
                    </div>

                </Modal.Body>

            </Modal>


            <Modal className='addcatogory2' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>delete category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mainsss'>
                        <img src='\assets\bluemark.svg' alt='img' className='img-fluid' />
                        <p>Are your sure you want to delete this category?</p>
                        <div className='endbyuutons'>
                            <button className='canclelight'>Cancel</button>
                            <button className='savebtns' >Yes i’m sure</button>
                        </div>
                    </div>


                </Modal.Body>

            </Modal>
        </>
    )
}

export default Categories