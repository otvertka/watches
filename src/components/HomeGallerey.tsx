import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

const images = [
  "/images/watch1.jpg",
  "/images/watch2.jpg",
  "/images/watch3.jpg",
  "/images/watch4.jpg",
  "/images/watch5.jpg",
];

const HomeGallery = () => {
  return (
    <div className="pointer-events-none w-full max-w-[500px] overflow-hidden rounded-xl">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeGallery;
