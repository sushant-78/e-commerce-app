import * as Styled from "./Featured-styled";
import { Link } from "react-scroll";

import { sliderItems } from "../../data";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Featured = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
        >
            {sliderItems.map((sliderItem) => {
                return (
                    <SwiperSlide key={sliderItem.id}>
                        <Styled.Feature>
                            <Styled.FeaturedImageContainer bg={sliderItem.bg}>
                                <Styled.FeaturedImage src={sliderItem.img} />
                            </Styled.FeaturedImageContainer>
                            <Styled.FeaturedTextContainer bg={sliderItem.bg}>
                                <Styled.FeaturedTitle>
                                    {sliderItem.title}
                                </Styled.FeaturedTitle>
                                <Styled.FeaturedDesc>
                                    {sliderItem.desc}
                                </Styled.FeaturedDesc>
                                <Styled.FeatureBtn>
                                    <Link
                                        to="categories"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        SHOP NOW
                                    </Link>
                                </Styled.FeatureBtn>
                            </Styled.FeaturedTextContainer>
                        </Styled.Feature>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Featured;
