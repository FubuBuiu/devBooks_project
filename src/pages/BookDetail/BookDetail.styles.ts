import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 48px;
  overflow: scroll;
`;

export const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h1`
  font-weight: normal;
  font-size: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const SpinnerLoading = styled.div`
  height: 45px;
  width: 45px;
  border: 5px solid transparent;
  border-bottom-color: #ef552b;
  border-radius: 100%;
  animation: ${rotation} 1s linear infinite;
`;

export const ContainerNotFound = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  h1 {
    margin-top: -250px;
  }
`;
