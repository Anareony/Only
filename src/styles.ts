import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  border-inline: 1px solid #c7cdd9;

  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    width: 100%;
    height: 1px;
    background: #c7cdd9;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: #c7cdd9;
    z-index: -1;
  }

  @media screen and (width <= 768px) {
    &:before,
    &:after {
      display: none;
    }
  }
`;

export const TitleMain = styled.div`
  position: relative;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;
  padding: 0 80px;

  &::after {
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    border-image: linear-gradient(to bottom, #3877ee, #ef5da8) 0 0 0 1;
    border-style: solid;
    position: absolute;
    border-width: 0 0 0 5px;
  }

  @media screen and (width <= 1024px) {
    padding: 0 60px;
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
    border: 1px solid #c7cdd9;
    background: #fff;
    z-index: -2;
  }

  @media screen and (width <= 768px) {
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
  top: calc(50%);
  left: calc(50%);

  z-index: 5;

  transform-origin: center;
  transform: translate(calc(-100% + 28px), calc(-100% + 28px))
    rotate(${({ $angle }) => $angle - 60}deg) translate(calc(100% + 210px))
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

  background: #42567a;
  border: 1px solid #303e5880;
  transition: all 0.4s ease-in-out;

  .circle-button:hover & {
    transform: scale(1);
    background: #fff;
  }

  .circle-button.active & {
    transform: scale(1);
    background: #fff;
  }
`;

export const CircleIndex = styled.div`
  opacity: 0;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #42567a;
  transition: all 0.4s ease-in-out;

  .circle-button:hover & {
    opacity: 1;
  }

  .circle-button.active & {
    opacity: 1;
  }
`;

export const CircleTitle = styled.div`
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;

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
    gap: 20px;
  }
`;

export const DateTitle = styled.div<{ $color?: string }>`
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 200px;
  color: ${(props) => (props.$color ? props.$color : "#BF4F74")};

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
  bottom: calc(50% - 276px);

  @media screen and (width <= 768px) {
    bottom: 10px;
  }
`;

export const CounterText = styled.div`
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #42567a;
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
  border: 1px solid #42567a80;
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
    border: solid #42567a;
    width: 8px;
    height: 8px;
    border-width: 0 2px 2px 0;
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  @media screen and (width <= 768px) {
    width: 25px;
    height: 25px;
    &::before {
      width: 4px;
      height: 4px;
    }
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  padding: 0 80px;
  display: flex;
  align-items: center;

  @media screen and (width <= 1024px) {
    padding: 0 60px;
  }

  @media screen and (width <= 768px) {
    padding: 0;
    margin: 0 20px;
  }
`;

export const SliderButton = styled.button<{ $isRight?: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
  background: #fff;
  cursor: pointer;
  padding: 0 10px 10px 0;
  ${({ $isRight }) => ($isRight ? "right: 20px" : "left: 20px")};
  transform: ${({ $isRight }) => `rotate(${$isRight ? "-45deg" : "135deg"})`};

  &::before {
    content: "";
    position: absolute;
    border: solid #3877ee;
    width: 6px;
    height: 6px;
    border-width: 0 2px 2px 0;
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
`;

export const SlideTitle = styled.div`
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #3877ee;

  @media screen and (width <= 768px) {
    font-size: 16px;
  }
`;

export const SlideBody = styled.div`
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #42567a;

  @media screen and (width <= 768px) {
    font-size: 14px;
  }
`;

export const PaginationContainer = styled.div`
  z-index: 10;
  position: absolute;
  display: none;
  gap: 10px;
  justify-content: center;
  width: 100%;

  @media screen and (width <= 768px) {
    display: flex;
  }
`;

export const PaginationButton = styled.button<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background: ${({ $isActive }) => ($isActive ? "#42567A" : "#42567A80")};
  cursor: pointer;
`;
