import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { THistoricDates } from "shared/consts/historicDates";
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
  Wrapper,
  MobileTitle,
  SwiperWrapper,
} from "./styles";

interface IMainPageProps {
  historicDates: THistoricDates;
}

export const MainPage: React.FC<IMainPageProps> = ({ historicDates }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dates, setDates] = useState({
    start: Number(historicDates[0].historicMoments[0].date),
    end: Number(historicDates[0].historicMoments.at(-1)?.date),
  });

  const pointRefs = useRef<HTMLButtonElement[]>([]);
  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const ANIMATE_DURATION = 0.4;

  useEffect(() => {
    pointRefs.current[0].classList.add("active");
  }, []);

  const updateAndAnimateDate = (index: number) => {
    const moments = historicDates[index].historicMoments;
    const newDates = {
      start: Number(moments[0].date),
      end: Number(moments.at(-1)?.date),
    };

    gsap.fromTo(
      startDateRef.current,
      { innerText: dates.start },
      {
        duration: ANIMATE_DURATION,
        innerText: newDates.start,
        snap: { innerText: 1 },
      }
    );

    gsap.fromTo(
      endDateRef.current,
      { innerText: dates.end },
      {
        duration: ANIMATE_DURATION,
        innerText: newDates.end,
        snap: { innerText: 1 },
      }
    );

    gsap.fromTo(
      swiperRef.current,
      {
        opacity: 0,
      },
      {
        duration: ANIMATE_DURATION,
        opacity: 1,
        ease: "none",
      }
    );

    setDates({ start: newDates.start, end: newDates.end });
  };

  const animateSpinnerTransition = (currentIndex: number) => {
    setActiveIndex(currentIndex);
    updateAndAnimateDate(currentIndex);

    const angleStep = 360 / historicDates.length;
    const radius = 265;
    const baseOffset = "translate(calc(-100% + 55px), calc(-100% + 56px))";

    pointRefs.current.forEach((point, index) => {
      const angle = angleStep * index;
      const rotationAngle = angleStep * currentIndex;
      const rotationOffset = -angle + 60;

      point.classList.toggle("active", index === currentIndex);

      gsap.to(point, {
        rotation: rotationAngle,
        duration: ANIMATE_DURATION,
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
    <Wrapper>
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
              onClick={() => animateSpinnerTransition(index)}
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
            <DateTitle $color="var(--blue-color)" ref={startDateRef}>
              {historicDates[activeIndex].historicMoments[0].date}
            </DateTitle>
            <DateTitle $color="var(--pink-color)" ref={endDateRef}>
              {historicDates[activeIndex].historicMoments.at(-1)?.date}
            </DateTitle>
          </DateContainer>

          <NavigationContainer>
            <CounterText>
              {activeIndex + 1}/{historicDates.length}
            </CounterText>
            <ButtonContainer>
              <SpinnerButton
                onClick={() => animateSpinnerTransition(activeIndex - 1)}
                disabled={!activeIndex}
              />
              <SpinnerButton
                onClick={() => animateSpinnerTransition(activeIndex + 1)}
                disabled={historicDates.length === activeIndex + 1}
                $isRight
              />
            </ButtonContainer>
          </NavigationContainer>
        </SpinnerContainer>
      </Container>

      <SwiperContainer>
        <SliderButton className="prev" />
        <SwiperWrapper ref={swiperRef}>
          <MobileTitle>{historicDates[activeIndex].title}</MobileTitle>
          <Swiper
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 3,
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
        </SwiperWrapper>
        <SliderButton className="next" $isRight />
        <PaginationContainer>
          {historicDates.map((_, index) => (
            <PaginationButton
              key={index}
              onClick={() => animateSpinnerTransition(index)}
              $isActive={activeIndex === index}
            />
          ))}
        </PaginationContainer>
      </SwiperContainer>
    </Wrapper>
  );
};
