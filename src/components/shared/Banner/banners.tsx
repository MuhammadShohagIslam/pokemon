import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./banner";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banners = () => {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="sm:h-[380px]"
            >
                <SwiperSlide>
                    <Banner imageURL={"../../../../../banner/banner-1.jpg"} title="Let's See Happy Pokemon" />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner imageURL={"../../../../../banner/banner-1.jpg"} title="Let's See Happy Pokemon" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banners;
