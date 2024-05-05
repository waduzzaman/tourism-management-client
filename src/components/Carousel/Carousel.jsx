
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) { // Check if progressCircle.current is not null
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) { // Check if progressContent.current is not null
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1591823600156-25dfdce98423?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white font-bold">Golden Grand Canyon</p>
              <p className="text-lg text-white">Majestic Hues: Hourshoeben Golden Grand Canyon Captured in Time.</p>
            </div>
          </div>
        </SwiperSlide>
            {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1561134643-668f9057cce4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white font-bold">Tranquil Serenity</p>
              <p className="text-lg text-white">Natures Symphony: Majestic mountains mirrored in the serene embrace of a tranquil lake</p>
            </div>
          </div>
        </SwiperSlide>
            {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
            "
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white font-bold"> Jungle Symphony</p>
              <p className="text-lg text-white">Exploring the vibrant tapestry of life in the Amazon rainforest.</p>
            </div>
          </div>
        </SwiperSlide>
            {/* Slide 4 */}
        <SwiperSlide className="relative">
          <img className="w-full h-[50%]"
            src="https://plus.unsplash.com/premium_photo-1694475026771-800aeecc6115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-gray-600 font-bold ">Frozen Majesty</p>
              <p className="text-lg text-gray-600">Perito Moreno Glacier: Santa Cruz breathtaking icy spectacle enchants all</p>
            </div>
          </div>
        </SwiperSlide>
            {/* Slide 5 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1561577101-aa749bffbb70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white font-bold">Ancient Splendor</p>
              <p className="text-lg text-white">Chichén Itzá: Echoes of Mayan civilization in Mexico heart.</p>
            </div>
          </div>
        </SwiperSlide>
            {/* Slide 6 */}
        <SwiperSlide className="relative">
          <img
            src="
            https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
            "
            alt="home"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white font-bold">Machu Picchu </p>
              <p className="text-lg text-white">Lost City Revealed: Machu Picchu, a testament to ancient Incan ingenuity</p>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Repeat the same structure for other slides */}
      </Swiper>

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </>
  );
}
