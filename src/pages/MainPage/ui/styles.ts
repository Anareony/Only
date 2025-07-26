import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-inline: 1px solid var(--secondary-color);

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: var(--secondary-color);
    z-index: 0;
  }

  @media screen and (width <= 768px) {
    &:after {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;

  margin-top: 20px;
  padding-top: 60px;

  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    width: 100%;
    height: 1px;
    background: var(--secondary-color);
    z-index: 0;
  }

  @media screen and (width <= 1024px) {
    padding-top: 40px;
  }

  @media screen and (width <= 768px) {
    padding-top: 20px;

    &:before {
      display: none;
    }
  }
`;

export const TitleMain = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: var(--primary-color);
  padding: 0 80px;

  &::after {
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    border-image: linear-gradient(
        to bottom,
        var(--blue-color),
        var(--pink-color)
      )
      0 0 0 1;
    border-style: solid;
    position: absolute;
    border-width: 0 0 0 5px;
  }

  @media screen and (width <= 1024px) {
    padding: 0 60px;
    font-size: 36px;
  }

  @media screen and (width <= 768px) {
    font-size: 20px;
    padding: 0 20px;
    &::after {
      border: none;
    }
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  top: 0;

  &:before {
    content: "";
    position: absolute;
    left: calc(50% - 266px);
    bottom: calc(50% - 266px);
    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 1px solid var(--secondary-color);
    z-index: 0;
  }

  @media screen and (width <= 768px) {
    top: 25%;
    &:before {
      display: none;
    }
  }
`;

export const CircleButton = styled.button<{ $angle: number }>`
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  z-index: 5;

  transform-origin: center;
  transform: translate(calc(-100% + 55px), calc(-100% + 56px))
    rotate(${({ $angle }) => $angle - 60}deg) translate(calc(100% + 209px))
    rotate(${({ $angle }) => -$angle + 60}deg);

  @media screen and (width <= 768px) {
    display: none;
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  transform: scale(0.1);
  padding: 0;
  cursor: pointer;
  border-radius: 50%;

  background: var(--primary-color);
  border: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;

  .circle-button:hover & {
    transform: scale(1);
    background: var(--bg-color);
  }

  .circle-button.active & {
    transform: scale(1);
    background: var(--bg-color);
  }
`;

export const CircleIndex = styled.div`
  opacity: 0;
  font-size: 20px;
  color: var(--primary-color);
  transition: all 0.4s ease-in-out;

  .circle-button:hover & {
    opacity: 1;
  }

  .circle-button.active & {
    opacity: 1;
  }
`;

export const CircleTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: var(--primary-color);

  position: absolute;
  left: calc(100% + 20px);

  opacity: 0;
  transform: scale(1);
  transition: all 0.4s ease-in-out;

  .circle-button.active & {
    opacity: 1;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 60px;
  z-index: 0;

  @media screen and (width <= 1024px) {
    gap: 40px;
  }

  @media screen and (width <= 768px) {
    gap: 25px;
  }
`;

export const DateTitle = styled.div<{ $color?: string }>`
  font-weight: 700;
  font-size: 200px;
  color: ${(props) => (props.$color ? props.$color : "")};

  @media screen and (width <= 1024px) {
    font-size: 132px;
  }

  @media screen and (width <= 768px) {
    font-size: 56px;
  }
`;

export const NavigationContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: calc(50% - 306px);
  padding: 0 80px;
  z-index: 2;

  @media screen and (width <= 1024px) {
    padding: 0 60px;
  }

  @media screen and (width <= 768px) {
    bottom: -295px;
    padding: 0 20px;
  }
`;

export const CounterText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--primary-color);
  margin-bottom: 20px;

  @media screen and (width <= 768px) {
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (width <= 768px) {
    gap: 8px;
  }
`;

export const SpinnerButton = styled.button<{ $isRight?: boolean }>`
  background: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transform: ${({ $isRight }) => `rotate(${$isRight ? "-45deg" : "135deg"})`};

  &::before {
    content: "";
    position: absolute;
    border: solid var(--primary-color);
    width: 10px;
    height: 10px;
    border-width: 0 2px 2px 0;
    bottom: calc(50% - 4px);
    left: calc(50% - 6px);
  }

  &:hover {
    background: var(--white-color);
  }

  &:disabled {
    opacity: 50%;

    &:hover {
      background: transparent;
      cursor: default;
    }
  }

  @media screen and (width <= 768px) {
    width: 25px;
    height: 25px;
    &::before {
      width: 7px;
      height: 7px;
      bottom: calc(50% - 2px);
      left: calc(50% - 5px);
    }
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  padding: 0 80px 30px 80px;
  display: flex;
  align-items: center;

  @media screen and (width <= 1024px) {
    padding: 0 60px;
  }

  @media screen and (width <= 768px) {
    padding: 0;
    margin: 0 20px;
    padding-bottom: 100px;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SliderButton = styled.button<{ $isRight?: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  box-shadow: 0 0 15px 0 #3877ee1a;
  background: var(--white-color);
  cursor: pointer;
  padding: 0 10px 10px 0;
  ${({ $isRight }) => ($isRight ? "right: 20px" : "left: 20px")};
  transform: ${({ $isRight }) => `rotate(${$isRight ? "-45deg" : "135deg"})`};

  &::before {
    content: "";
    position: absolute;
    border: solid var(--blue-color);
    width: 8px;
    height: 8px;
    border-width: 0 2px 2px 0;
    bottom: calc(50% - 3px);
    left: calc(50% - 5px);
  }

  &.swiper-button-disabled {
    display: none;
  }

  @media screen and (width <= 1024px) {
    ${({ $isRight }) => ($isRight ? "right: 10px" : "left: 10px")};
  }

  @media screen and (width <= 768px) {
    display: none;
  }
`;

export const CustomSlide = styled(SwiperSlide)`
  min-height: 150px;
  transition: all 0.4s ease-in-out;

  @media screen and (width <= 768px) {
    &.swiper-slide {
      opacity: 0.5;
    }
    &.swiper-slide-active {
      opacity: 1;
    }
  }
`;

export const SlideTitle = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: var(--blue-color);
  margin-bottom: 15px;

  @media screen and (width <= 768px) {
    font-size: 16px;
  }
`;

export const SlideBody = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: var(--primary-color);

  @media screen and (width <= 768px) {
    font-size: 14px;
  }
`;

export const PaginationContainer = styled.div`
  z-index: 10;
  position: absolute;
  display: none;
  justify-content: center;
  width: 100%;

  @media screen and (width <= 768px) {
    display: flex;
    bottom: 32px;
  }
`;

export const PaginationButton = styled.button`
  padding: 5px;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $isActive }) =>
    $isActive ? "var(--primary-color)" : "var(--border-color)"};
`;

export const MobileTitle = styled.div`
  color: var(--primary-color);
  display: none;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  padding: 0 0 20px;
  border-bottom: 1px solid var(--secondary-color);
  margin-bottom: 20px;

  @media screen and (width <= 768px) {
    display: block;
  }
`;
