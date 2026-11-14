"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function About({ title, description, images }) {
    return (
        <section className="bg-background overflow-hidden py-20 text-[#17171b] md:py-28">
            <div className="mx-auto max-w-[1440px] px-6 md:px-9">

                <div className="flex items-start justify-between">
                    <h2 className="whitespace-pre-line font-tt-firs text-[42px] leading-[48px] font-medium uppercase sm:text-[64px] sm:leading-[72px] lg:text-[90px] lg:leading-[100px]">
                        {title}
                    </h2>

                    <a
                        href="#program"
                        className="hidden sm:block mt-2 whitespace-nowrap border-b border-black pb-1 font-tt-hoves text-sm hover:opacity-50"
                    >
                        Go to xSchool
                    </a>
                </div>

                <p className="mt-12 font-tt-hoves text-[#141414] text-[20px] leading-[27px] font-normal sm:text-[24px] sm:leading-[34px] lg:text-[30px] lg:leading-[44px]">
                    {description}
                </p>

            </div>

            <Swiper
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={28}
                initialSlide={1}
                grabCursor={true}
                className="about-swiper mt-12 md:mt-14"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.image}
                            alt={`xSchool ${index + 1}`}
                            className="aspect-[16/9] w-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}
