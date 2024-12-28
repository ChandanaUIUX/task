import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const Client = () => {
    return (
        <div className='container' id="client">
            <div className='text-center'>
                <h1>Over 100 clients and 200 projects across the globe.</h1>
                <p>client success Stories</p>
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={require("../../Assests/images/c1.png")} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Saurab</h5>
                            <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                                told me but after receiving the services, i was really happy at the quality and the time duration they
                                have taken to submit the work.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c2.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c3.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c4.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c5.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c6.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="card" style={{ width: '18rem' }}>
                    <img src={require("../../Assests/images/c7.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Saurab</h5>
                        <p class="card-text">I have come through Codeconnex from an acquaintance. I could not believe when he
                            told me but after receiving the services, i was really happy at the quality and the time duration they
                            have taken to submit the work.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};
export default Client;






