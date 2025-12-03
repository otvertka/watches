import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Lightbox from "yet-another-react-lightbox";
import { Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Props = {
  mainImage: string;
  images: string[];
};

const WatchSlider = ({ mainImage, images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // объединяем все фото в один массив
  const gallery = [mainImage, ...images];

  return (
    <div className="w-full">
      {/* --- MOBILE --- */}
      <div className="block sm:hidden">
        <Swiper
          pagination={{ clickable: true }}
          navigation
          spaceBetween={10}
          modules={[Pagination]}
          className="main-slider w-full h-[300px] overflow-hidden bg-gray-50 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img
                src={img}
                alt={`watch mobile ${i}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- DESKTOP --- */}
      <div className="hidden sm:block w-full">
        {/* Основной слайд */}
        <Swiper
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="main-slider w-full h-[500px] rounded-xl overflow-hidden bg-gray-50 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img
                src={img}
                alt={`watch ${i}`}
                className="max-h-[500px] max-w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Миниатюры */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          navigation
          modules={[Navigation, Thumbs]}
          className="thumbs mt-4 h-[120px]"
          slidesPerView={4}
        >
          {gallery.map((img, i) => (
            <SwiperSlide
              key={i}
              className="cursor-pointer flex justify-center items-center"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img}
                alt={`thumb ${i}`}
                className="h-full w-full object-cover hover:opacity-80 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- LIGHTBOX --- */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={gallery.map((src) => ({ src }))}
          plugins={[Zoom, Thumbnails]}
          thumbnails={{ position: "bottom" }}
        />
      )}
    </div>
  );
};

export default WatchSlider;
