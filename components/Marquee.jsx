"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Marquee({ slider }) {
    if (!slider) return null;

    const items = [
        slider.xline1,
        slider.xline2,
        slider.xline3,
    ].filter(Boolean);

    return (
        <section className="marquee-section">
            {[false, true].map((reverse, row) => (
                <Swiper
                    key={row}
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    loop
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: reverse,
                    }}
                    allowTouchMove={false}
                    className="marquee-swiper"
                >
                    {Array.from({ length: 6 }).map((_, groupIndex) =>
                        items.map((item, index) => (
                            <SwiperSlide key={`${groupIndex}-${index}`}>
                                <span className="marquee-item">
                                    {item}
                                    <span className="marquee-star">*</span>
                                </span>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            ))}
        </section>
    );
}