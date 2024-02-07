import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import Banner from './Banner/Banner'
import Flowpresale from './Flowpresale/Flowpresale'
import Usertoken from './Usertoken/Usertoken'

function Userlanding() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <Header />
        <Banner />
        <Flowpresale />
        <Usertoken />
        </>
    )
}

export default Userlanding