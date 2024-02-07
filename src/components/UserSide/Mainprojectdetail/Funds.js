import React from 'react'
import "./mainprojectdetail.scss"
import { Link } from 'react-router-dom'
const Funds = () => {
    return (
        <div className='right'>
            <div className='contributioncard'>
                <h2>My Contributions</h2>
                <div className='main-cardss'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead className='tblheadss'>
                            <tr>
                                <th>Project</th>
                                <th>Total Raised</th>
                                <th>Status</th>

                                <th>Chain</th>
                                <th>My Investment</th>
                                <th>Token Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>


                                    <div className='innerparent'>
                                        <div className='left'>
                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                        </div>
                                        <div className='right'>
                                            <p className='bold'>FLOWX</p>
                                            <h6>$FLOW</h6>
                                        </div>
                                    </div>


                                </td>
                                <td><p className='bold'>$100.32K</p></td>
                                  <td> <p className='green'>Live</p></td>
                                <td><p className='bold'>ETH</p></td>
                                <td><p className='bold'>$584</p></td>
                                <td><p className='bold'>29,200</p></td>
                              
                                <td>  <Link to="/userpresaleflow2"><button>Details</button></Link></td>
                            </tr>
                            <tr>
                                <td>


                                    <div className='innerparent'>
                                        <div className='left'>
                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                        </div>
                                        <div className='right'>
                                            <p className='bold'>FLOWX</p>
                                            <h6>$FLOW</h6>
                                        </div>
                                    </div>


                                </td>
                                <td><p className='bold'>$100.32K</p></td>
                                  <td> <p className='green'>Live</p></td>
                                <td><p className='bold'>ETH</p></td>
                                <td><p className='bold'>$584</p></td>
                                <td><p className='bold'>29,200</p></td>
                                <td><button>Details</button></td>
                            </tr>
                            <tr>
                                <td>


                                    <div className='innerparent'>
                                        <div className='left'>
                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                        </div>
                                        <div className='right'>
                                            <p className='bold'>FLOWX</p>
                                            <h6>$FLOW</h6>
                                        </div>
                                    </div>


                                </td>
                                <td><p className='bold'>$100.32K</p></td>
                                  <td> <p className='green'>Live</p></td>
                                <td><p className='bold'>ETH</p></td>
                                <td><p className='bold'>$584</p></td>
                                <td><p className='bold'>29,200</p></td>
                                <td><button>Details</button></td>
                            </tr>
                            <tr>
                                <td>


                                    <div className='innerparent'>
                                        <div className='left'>
                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                        </div>
                                        <div className='right'>
                                            <p className='bold'>FLOWX</p>
                                            <h6>$FLOW</h6>
                                        </div>
                                    </div>


                                </td>
                                <td><p className='bold'>$100.32K</p></td>
                                  <td> <p className='green'>Live</p></td>
                                <td><p className='bold'>ETH</p></td>
                                <td><p className='bold'>$584</p></td>
                                <td><p className='bold'>29,200</p></td>
                                <td><button>Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default Funds