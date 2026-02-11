import Button from "../Button";
import heroSlides from "./heroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2500}
        loop={true}
        grabCursor={true}
        className="hero-swiper"
      >
        {heroSlides.map(({ id, title, subtitle, text, buttonText, image }) => (
          <SwiperSlide key={id} className="hero__content">
            <div>
              <h1 className="heading--xl">{title}</h1>
              <span className="hero__subtitle heading--xl-sub">{subtitle}</span>
              <p className="text--main hero__description">{text}</p>
              <Button variant="primary" size="lg" className="btn__register">
                {buttonText}
              </Button>
            </div>
            <img src={image} alt="Hero illustration" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
