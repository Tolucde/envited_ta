import { typography, theme } from '../../assets/styles'
import styled from 'styled-components'
import { fontWeight } from '../../assets/styles/typography'

const { fonts } = typography
const { colors } = theme

export const HomeStyles = styled.main`
  padding: 94px 46px;
  background: ${colors.background};
  height: fit-content;
  min-height: 100vh;
  width: 100%;
`

export const Hero = styled.main`
  width: 100%;
  height: fit-content;
  position: relative;
  font-family: ${fonts.Helvetica};
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    display: flex;
    flex-direction: row-reverse;
    padding-left: 170px;
    padding-right: 160px;
    /* margin: 0 auto; */
  }
`
export const SubHeading = styled.h6`
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 0.6rem;
  font-style: normal;
  font-weight: ${fontWeight.light};
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 36px;
  color: #4f4f4f;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 55px;
  }
  @media screen and (min-width: 1280px) {
    text-align: right;
  }
`

export const Heading = styled.h2`
  font-style: normal;
  font-weight: ${fontWeight.bold};
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  color: #240d57;
  margin-bottom: 16px;
  span {
    background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  @media screen and (min-width: 375px) {
    font-size: 64px;
    line-height: 74px;
  }
  @media screen and (min-width: 1280px) {
    text-align: right;
  }
`
export const Banner = styled.figure`
  width: 165.63px;
  height: 292px;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 13.2326px;
  img {
    height: 100%;
    width: 100%;

    border-radius: 13.2326px;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: 311px;
    height: 548.27px;
    margin-bottom: 52.73px;
  }
  @media screen and (min-width: 1280px) {
    width: 440px;
    height: 775.69px;
    margin: 0;
  }
`

export const Button = styled.button`
  background: ${colors.gradient};
  border-radius: 16px;
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: ${fontWeight.bold};
  cursor: pointer;
  letter-spacing: 0.02em;
  font-size: 16px;
  color: #ffffff;
  width: 187px;
  height: 50px;
  margin: 0 auto;

  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 55px;
    margin-right: 0;
  }
`

export const HeroContent = styled.div`
  @media screen and (min-width: 1280px) {
    text-align: right;
    width: 521px;
  }
`
