import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { THistoricDates } from "./shared";
import gsap from "gsap";
import {
  ButtonContainer,
  CircleButton,
  Container,
  CustomSlide,
  SliderButton,
  SwiperContainer,
  TitleMain,
  DateContainer,
  PaginationButton,
  PaginationContainer,
  SlideTitle,
  SlideBody,
  SpinnerButton,
  NavigationContainer,
  SpinnerContainer,
  DateTitle,
  CircleTitle,
  CircleIndex,
  CircleWrapper,
  CounterText,
} from "./styles";

interface Props {
  historicDates: THistoricDates;
}

export const Swipe: React.FC<Props> = ({ historicDates }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dates, setDates] = useState({
    start: Number(historicDates[0].historicMoments[0].date),
    end: Number(historicDates[0].historicMoments.at(-1)?.date),
  });

  const pointRefs = useRef<HTMLButtonElement[]>([]);
  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    pointRefs.current[0].classList.add("active");
  }, []);

  const dateUpdate = (index: number) => {
    const moments = historicDates[index].historicMoments;
    const newDates = {
      start: Number(moments[0].date),
      end: Number(moments.at(-1)?.date),
    };

    gsap.fromTo(
      [startDateRef.current, endDateRef.current],
      {
        innerText: [dates.start, dates.end],
      },
      {
        duration: 0.4,
        innerText: [newDates.start, newDates.end],
        snap: { innerText: 1 },
        onUpdate: () => setDates(newDates),
      }
    );
  };

  const handleIndexState = (index: number) => {
    moves(index);
  };

  const handleIncreaseState = () => {
    moves(activeIndex + 1);
  };

  const handleDecreaseState = () => {
    moves(activeIndex - 1);
  };

  const moves = (currentIndex: number) => {
    setActiveIndex(currentIndex);
    swiperLoad();
    dateUpdate(currentIndex);

    pointRefs.current.forEach((item, i) => {
      item.classList.toggle("active", i === currentIndex);
    });

    const angleStep = 360 / historicDates.length;
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

  return (
    <Container>
      <TitleMain>
        Исторические <br />
        даты
      </TitleMain>

      <SpinnerContainer>
        {historicDates.map((item, index) => (
          <CircleButton
            key={index}
            className="circle-button"
            onClick={() => handleIndexState(index)}
            ref={(el) => {
              if (el) pointRefs.current[index] = el;
            }}
            $angle={(360 / historicDates.length) * index}
          >
            <CircleWrapper>
              <CircleIndex>{index + 1}</CircleIndex>
              <CircleTitle className="title">{item.title}</CircleTitle>
            </CircleWrapper>
          </CircleButton>
        ))}

        <DateContainer>
          <DateTitle $color="#5d5fef" ref={startDateRef}>
            {historicDates[activeIndex].historicMoments[0].date}
          </DateTitle>
          <DateTitle $color="#ef5da8" ref={endDateRef}>
            {historicDates[activeIndex].historicMoments.at(-1)?.date}
          </DateTitle>
        </DateContainer>

        <NavigationContainer>
          <CounterText>
            {activeIndex + 1}/{historicDates.length}
          </CounterText>
          <ButtonContainer>
            <SpinnerButton
              onClick={handleDecreaseState}
              disabled={!activeIndex}
            />
            <SpinnerButton
              onClick={handleIncreaseState}
              disabled={historicDates.length === activeIndex + 1}
              $isRight
            />
          </ButtonContainer>
        </NavigationContainer>
      </SpinnerContainer>

      <SwiperContainer>
        <SliderButton className="prev" />
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={3}
          grabCursor={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
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
          {historicDates[activeIndex].historicMoments.map((item) => (
            <CustomSlide>
              <SlideTitle>{item.date}</SlideTitle>
              <SlideBody>{item.text}</SlideBody>
            </CustomSlide>
          ))}
        </Swiper>
        <SliderButton className="next" $isRight />
        <PaginationContainer>
          {historicDates.map((_, index) => (
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
