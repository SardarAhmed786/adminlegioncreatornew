import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Updatedroadmap = () => {
    const history = useHistory();
    const token = localStorage.getItem('mytoken');
    const [id, setId] = useState("");
    const [detail, setDetail] = useState([]);
    
    const getUpdateDetail = async () => {

        const config = {
            method: "get",
            url:  Environment.backendUrl + "/updates/getLaunchpadUpdateById?id=" + id ,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                setDetail(res?.data?.data);
            })
            .catch((err) => {
                if (err?.response?.status == 501) {
                    history.push("/");
                } else {
                    toast.error(err?.response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }

            });
    };

    const approved = async () => {

        const config = {
            method: "patch",
            url:  Environment.backendUrl + "/updates/approveLaunchpadUpdate?id=" + id ,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                toast.success(res?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                history.push("/yourproject/updates");
            })
            .catch((err) => {
                if (err?.response?.status == 501) {
                    history.push("/");
                } else {
                    toast.error(err?.response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }

            });
    };

    const rejected = async () => {

        const config = {
            method: "patch",
            url:  Environment.backendUrl + "/updates/rejectLaunchpadUpdate?id=" + id ,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                toast.success(res?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                history.push("/yourproject/updates");
            })
            .catch((err) => {
                if (err?.response?.status == 501) {
                    history.push("/");
                } else {
                    toast.error(err?.response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }

            });
    };

    useEffect(() => {
        var val = window.location.href;
        val = new URL(val);
        setId(val.searchParams.get("id"));
        localStorage.setItem("currentId", val.searchParams.get("id"));
        // window.scroll(0, 0);
        if (id) {
            getUpdateDetail();
        }
    }, [id]);
    return (
        <>
            <Header />
            <section className='mainproject'>
                <div className="custom-container">
                    <div className='row'>
                        <div className='col-xl-8 col-md-12 m-auto'>
                            <div className='outerdivolybdrss '>
                                <div className='innercontentss'>
                                    <div className='leftss'>
                                        <div className='innerrightss'>
                                            <img src={detail?.launchpad?.projectLogo} alt='img' className='img-fluid' />
                                        </div>
                                        <div className='innerleftss'>
                                            <h4>{detail?.launchpad?.projectName}</h4>
                                            <p>{detail?.launchpad?.createdAt}</p>
                                        </div>
                                    </div>
                               
                                <div className='bottomcontentssss'>
                                    <p className='officialflows pb-3'>{detail?.description} </p>
                                    {/* <p className='officialflows pb-3'>After a successful token & platform launch in Q4 2024, we continue to ship.  </p>
                                    <p className='officialflows pb-3'>Back in December, we completed a $1.9M round with individuals and funds like
                                        <span className='bluessedx'>@Momentum_6, @Faculty__Group, @IvanOnTech, @BrianDEvans, @gainzy222</span> to build a web3 launch hub on @Cosmos and leading L2s </p> */}

                                    <img src={detail?.media_url} alt='img' className='img-fluid w-100' />

                                </div>
                                </div>
                                <div className='twinnsdfbtns'>
                                    <button onClick={() => rejected()} className='lefttwinbtn'>
                                        Reject
                                    </button>
                                    <button onClick={() => approved()} className='lefttwinbtnApprove'>
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Updatedroadmap;
