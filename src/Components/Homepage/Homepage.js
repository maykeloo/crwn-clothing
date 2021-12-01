import React from 'react'
import { Content, DirectoryMenu, MenuItem, Subtitle, Title, HomepageContainer } from './homepageElements'

export const Homepage = () => {
    return (
        <>
          <HomepageContainer>
              <DirectoryMenu>
                  <MenuItem>
                    <Content>
                        <Title>Hats</Title>
                        <Subtitle>Shop now</Subtitle>
                    </Content>
                  </MenuItem>

                  <MenuItem>
                    <Content>
                        <Title>Hats</Title>
                        <Subtitle>Shop now</Subtitle>
                    </Content>
                  </MenuItem>

                  <MenuItem>
                    <Content>
                        <Title>Hats</Title>
                        <Subtitle>Shop now</Subtitle>
                    </Content>
                  </MenuItem>

                  <MenuItem>
                    <Content>
                        <Title>Hats</Title>
                        <Subtitle>Shop now</Subtitle>
                    </Content>
                  </MenuItem>

                  <MenuItem>
                    <Content>
                        <Title>Hats</Title>
                        <Subtitle>Shop now</Subtitle>
                    </Content>
                  </MenuItem>
              </DirectoryMenu>
          </HomepageContainer>
        </>
    )
}
