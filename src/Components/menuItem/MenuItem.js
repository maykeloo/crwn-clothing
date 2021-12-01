import React from "react";
import {
  MenuItemWrapper,
  Content,
  Title,
  Subtitle,
  BackgroundImage,
} from "./menuItemElements.js";


const MenuItem = ({title, imageUrl, size}) => {
  return (
    <>
      <MenuItemWrapper className={`${size}`}>
          <BackgroundImage id='bg-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
        <Content id='cont'>
          <Title>{title.toUpperCase()}</Title>
          <Subtitle>Shop now</Subtitle>
        </Content>
      </MenuItemWrapper>
    </>
  );
};

export default MenuItem;
