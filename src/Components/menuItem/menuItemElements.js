import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItemWrapper = styled(Link)`
  text-decoration: none;
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7.5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &.large {
    height: 400px;
  }

  &:hover {
    > #bg-image {
        transform: scale(1.1);
    }

    > #cont {
      background-color: rgb(255, 255, 255, 1);
    }
  }
`;

export const Content = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  background-color: rgb(255, 255, 255, 0.7);
`;

export const Title = styled.h1`
  color: #14213d;
`;

export const Subtitle = styled.span`
  color: blue;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 6s cubic-bezier(.2,1.07,.98,.06);
  z-index: -1;
`;
