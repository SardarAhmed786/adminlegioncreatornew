import React from 'react'
import "./livechat.scss"
import Header from '../../Header/Header'
const Livechat = () => {
    return (
        <>
            <Header />
            <section className='mainchat'>
                <div className="custom-container">
                    <div className='parentchat'>
                        <div className='left'>
                            <div className='mainimg'>
                                <img src='\assets\chat.svg' alt='img' className='img-fluid live' />
                            </div>
                            <div className='leftchatcard'>
                                <div className='mainhead'>
                                    <h2>FLOWX live stream | December 2023</h2>
                                    <div className='hhhh'>
                                        <p>FLOWX Finance </p>
                                        <h6></h6>
                                        <span className='gray'>3.4k Watching</span>
                                    </div>

                                </div>
                                <div className='brdr'></div>
                                <h2 className='blck'>Decription</h2>
                                <p className='paraaa'>Lorem ipsum dolor sit amet. Aut nemo expedita ut numquam odit qui harum repudiandae et voluptatum galisum ut quibusdam amet ut provident labore. Ea veniam incidunt et voluptas repellat eum necessitatibus odit vel consequatur adipisci quo praesentium similique id atque incidunt. In omnis quas aut quasi numquam sed pariatur unde non corrupti quas est libero error.</p>
                                <p className='paraaa'>  Qui eveniet sint sit perferendis facere et quis eligendi eum iure maiores vel tempora voluptatum. Cum galisum magnam vel laudantium sequi est nisi delectus sit optio voluptas ut molestiae iste quo voluptatem voluptatibus. Ut dolor commodi qui asperiores libero est eius dicta est aliquam rerum sit esse dolor. Eum reprehenderit consequatur et autem sint ad blanditiis laborum et facilis quibusdam hic quod perferendis eum asperiores sapiente cum asperiores reiciendis.</p>
                                <p className='paraaa'>Eos modi aliquam ad nesciunt molestiae et porro soluta quo impedit molestiae ad aliquid quibusdam sed delectus neque 33 iste voluptates. Ut fugit ipsa est accusantium eligendi hic minus molestias quo nisi dolorem ab autem repellat. Sed sunt veniam qui ipsam modi et autem rerum qui officia minus eum enim dolor.</p>

                            </div>
                        </div>
                        <div className='right'>
                            <div className='rightcard'>
                                <h2>Live Chat</h2>
                            </div>
                            <div className='cardss'>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor1.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Harold Collins</h6>
                                        <p>Et internos cumque 33 quis aperiam ea aliquid temporibus ut</p>
                                    </div>
                                </div>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor2.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Linda Powell</h6>
                                        <p>Eum culpa veritatis qui fuga corporis 33 veritatis</p>
                                    </div>
                                </div>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor3.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Wayne Green</h6>
                                        <p>Aut rerum nostrum est laborum voluptas ut minus</p>
                                    </div>
                                </div>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor4.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Kathy Simmons</h6>
                                        <p>Ut consequatur modi ex commodi expedita ut harum dicta aut fuga exercitationem.</p>
                                    </div>
                                </div>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor1.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Jack Morris</h6>
                                        <p>Sed similique dolor aut minus ducimus quo dolores incidunt ut itaque nulla nam nisi optio quo soluta natus.</p>
                                    </div>
                                </div>
                                <div className='parentcardtext'>
                                    <div className='left'>
                                        <img src='\assets\actor1.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='right'>
                                        <h6>Wayne Green</h6>
                                        <p>Aut rerum nostrum est laborum voluptas ut minus</p>
                                    </div>
                                </div>
                            </div>
                            <div className='inputcard'>
                                <input type='text' placeholder='Reply' />
                                <div className='sendbox'>
                                    <img src='\assets\send-2.png' alt='img' className='img-fluid send' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Livechat