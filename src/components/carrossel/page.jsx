"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

function Carrossel() {
  const data = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/736x/24/52/20/245220962ecabba9f3b6ee3fac3b0a7f.jpg",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/736x/e4/0a/4e/e40a4e5b2fa2d506242706b9be33e4ea.jpg",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/736x/2b/be/fc/2bbefcefa77ce18e714d01527026b0aa.jpg",
    },
    {
      id: "4",
      image:
        "https://i.pinimg.com/736x/e4/14/da/e414da7e55508a6e6674060b0db53c4f.jpg",
    },
  ];

  return (
    <div className="container text-black" >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;