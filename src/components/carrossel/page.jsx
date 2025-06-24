"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import { FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";


function Carrossel() {
  const data = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/736x/24/52/20/245220962ecabba9f3b6ee3fac3b0a7f.jpg",
      text: "Destaque",
      text2: "FIRE\nFORCE",
      text3:
        "Shinra e seus companheiros estão prontos para entrar para a Brigada de Incêndio para impedir que os demônios flamejantes, chamados de Infernais, incendeiem toda a cidade!",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/736x/e4/0a/4e/e40a4e5b2fa2d506242706b9be33e4ea.jpg",
      text: "Destaque",
      text2: "ATTACK\nON TITAN",
      text3: "0",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/736x/2b/be/fc/2bbefcefa77ce18e714d01527026b0aa.jpg",
      text: "Destaque",
      text2: "SOLO\nLEVELING",
      text3: "0",
    },
    {
      id: "4",
      image:
        "https://i.pinimg.com/736x/e4/14/da/e414da7e55508a6e6674060b0db53c4f.jpg",
      text: "Destaque",
      text2: "JUJUTSU\nKAISEN",
      text3: "0",
    },
  ];

  return (
    <div className="container text-black">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <img
                src={item.image}
                alt="slider"
                className="slide-item w-full"
              />
              <div className="absolute inset-17 flex justify-start">
                <p className="text-white text-3xl stroke-3 stroke-black font-bold drop-shadow-lg">
                  {item.text}
                </p>
              </div>
              <div className="absolute left-45 inset-80 flex justify-start">
                <p className="text-white text-center text-7xl whitespace-pre-line font-semibold stroke-3 stroke-black drop-shadow-lg">
                  {item.text2}
                </p>
              </div>
              <div className="absolute left-45 inset-120 flex justify-start">
                <p className="text-white text-justify w-160 text-1xl font-bold stroke-3 stroke-black drop-shadow-lg">
                  {item.text3}
                </p>
              </div>
              <div className="text-1xl absolute left-45 inset-145 flex justify-start">
                <div>
                  <p className="flex items-center justify-center cursor-pointer font-bold text-white bg-[#191d29] rounded-md p-2 w-30 h-11.5 hover:bg-[#9aa5bb] hover:text-black shadow-b-lg transition-all duration-200">
                    Começar
                  </p>
                </div>
              </div>
              <div className="text-1xl absolute left-78 inset-145 flex justify-start">
                <div className="flex justify-center items-center  cursor-pointer font-bold text-white bg-[#191d29] rounded-md p-2 w-15 h-11.5 hover:bg-[#9aa5bb] hover:text-black shadow-b-lg transition-all duration-200 ">
                    <FaRegStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;
