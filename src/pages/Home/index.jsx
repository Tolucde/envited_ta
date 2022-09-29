import React from 'react'

import useMedia from '@charlietango/use-media'
import Image from '../../components/Image'
import heroBanner from '../../assets/images/others/banner.png'
import {
  HomeStyles,
  Hero,
  Heading,
  SubHeading,
  Banner,
  Button,
  HeroContent,
} from './styles'
import { Link } from 'react-router-dom'

const Home = () => {
  const matches = useMedia({ minWidth: 1280 })

  return (
    <HomeStyles>
      <Hero>
        <HeroContent>
          <Heading>
            Imagine if <br /> <span>Snapchat</span> <br />
            had events
          </Heading>
          <SubHeading>
            Easily host and share events with your friends across any social
            media.
          </SubHeading>
          {matches && (
            <Button as={Link} to='/create'>
              Create my event
            </Button>
          )}
        </HeroContent>
        <Banner>
          <Image lazyLoad={false} src={heroBanner} />
        </Banner>
        {!matches && (
          <Button as={Link} to='/create'>
            Create my event
          </Button>
        )}
      </Hero>
    </HomeStyles>
  )
}

export default Home
