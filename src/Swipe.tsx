import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { historicDatesProps } from "./shared";
import gsap from "gsap";
import {
  Body,
  Button,
  ButtonContainer,
  CircleButton,
  CircleText,
  Container,
  CounterContainer,
  CustomSlide,
  Inser,
  SliderButton,
  SliderCounter,
  SwiperContainer,
  Title,
  TitleContainer,
  TitleDate,
  TitleMain,
  Text,
  DateContainer,
  PaginationButton,
  PaginationContainer,
} from "./styles";

interface Props {
  historicDatesProps: historicDatesProps;
}

export const Swipe: React.FC<Props> = ({ historicDatesProps }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pointRefs = useRef<HTMLButtonElement[]>([]);

  const swiperRef = useRef<SwiperRef>(null);

  const swiperLoad = () => {
    gsap.fromTo(
      swiperRef.current,
      {
        opacity: 0,
      },
      {
        duration: 0.8,
        opacity: 1,
        ease: "power1.in",
      }
    );
  };

  const handleIndexState = (huina: number) => {
    setActiveIndex(huina);
    moves(huina);
    pointRefs.current.forEach((item) => item.classList.remove("active"));
    pointRefs.current[huina].classList.add("active");
  };

  const moves = (currentIndex: number) => {
    swiperLoad();
    const totalItems = historicDatesProps.length;
    const angleStep = 360 / totalItems;
    const radius = 266;
    const baseOffset = "translate(calc(-100% + 28px), calc(-100% + 28px))";

    pointRefs.current.forEach((point, index) => {
      const angle = angleStep * index;
      const rotationAngle = angleStep * currentIndex;

      const rotationOffset = -angle + 60;

      gsap.to(point, {
        rotation: rotationAngle,
        duration: 0.4,
        ease: "none",
        modifiers: {
          rotation: (rotation) => {
            const newAngle = parseFloat(rotation);
            const radian = (newAngle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(-radian) * radius;

            point.style.transform = `${baseOffset} rotate(${
              angle - 60
            }deg) translate(${x}px, ${y}px) rotate(${rotationOffset}deg) `;

            return newAngle;
          },
        },
      });
    });
  };

  const handleIncreaseState = () => {
    setActiveIndex(activeIndex + 1);
    moves(activeIndex + 1);

    pointRefs.current[activeIndex + 1].classList.add("active");
    pointRefs.current[activeIndex].classList.remove("active");
  };

  const handleDecreaseState = () => {
    setActiveIndex(activeIndex - 1);
    moves(activeIndex - 1);

    pointRefs.current[activeIndex - 1].classList.add("active");
    pointRefs.current[activeIndex].classList.remove("active");
  };

  useEffect(() => {
    pointRefs.current[0].classList.add("active");
  }, []);

  return (
    <Container className="circle">
      <TitleMain>
        Исторические <br />
        даты
      </TitleMain>

      <TitleContainer>
        {historicDatesProps.map((item, index) => (
          <CircleButton
            key={index}
            $angle={(360 / historicDatesProps.length) * index}
            onClick={() => handleIndexState(index)}
            ref={(el) => {
              if (el) {
                pointRefs.current[index] = el;
              }
            }}
            className="circle-button"
          >
            <Inser>
              <Text>{index + 1}</Text>
              <CircleText className="title">{item.title}</CircleText>
            </Inser>
          </CircleButton>
        ))}

        <DateContainer>
          <TitleDate $color="#5d5fef">
            {historicDatesProps[activeIndex].firstDate}
          </TitleDate>
          <TitleDate $color="#ef5da8">
            {historicDatesProps[activeIndex].secondDate}
          </TitleDate>
        </DateContainer>

        <CounterContainer>
          <SliderCounter>
            {activeIndex + 1}/{historicDatesProps.length}
          </SliderCounter>
          <ButtonContainer>
            <Button onClick={handleDecreaseState} disabled={!activeIndex} />
            <Button
              onClick={handleIncreaseState}
              disabled={historicDatesProps.length === activeIndex + 1}
              $isRight
            />
          </ButtonContainer>
        </CounterContainer>
      </TitleContainer>

      <SwiperContainer>
        <SliderButton className="slider__btn_prev" />
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={3}
          grabCursor={true}
          navigation={{
            prevEl: ".slider__btn_prev",
            nextEl: ".slider__btn_next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
          }}
        >
          {historicDatesProps[activeIndex].historicMoments.map((item) => (
            <CustomSlide>
              <Title>{item.date}</Title>
              <Body>{item.text}</Body>
            </CustomSlide>
          ))}
        </Swiper>
        <SliderButton className="slider__btn_next" $isRight />
        <PaginationContainer>
          {historicDatesProps.map((item, index) => (
            <PaginationButton
              key={index}
              onClick={() => handleIndexState(index)}
              $isActive={activeIndex === index}
            />
          ))}
        </PaginationContainer>
      </SwiperContainer>
    </Container>
  );
};
