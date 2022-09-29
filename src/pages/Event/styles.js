import { typography, theme } from '../../assets/styles'
import styled from 'styled-components'
import { fontWeight } from '../../assets/styles/typography'

const { fonts } = typography
const { colors } = theme

export const EventStyles = styled.main`
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media screen and (min-width: 768px) {
    padding: 88px 183px;
  }
  @media screen and (min-width: 1280px) {
    padding: 184px 240px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const EventImage = styled.figure`
  width: 100%;
  height: fit-content;
  position: relative;
  height: 375px;
  margin-bottom: 0.6rem;
  /* max-width: 593px; */
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    height: 593px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 500px;
  }
`
export const EventDetails = styled.article`
  width: 100%;
  /* max-width: 593px; */
  height: fit-content;
  position: relative;
  padding-left: 20px;
  padding-top: 11px;
  font-family: ${fonts.Helvetica};
  @media screen and (min-width: 768px) {
    padding-left: 0;
    width: fit-content;
    padding-top: 36px;
  }
`
export const Heading = styled.h3`
  width: 100%;
  font-weight: ${fontWeight.bold};
  font-size: 28px;
  line-height: 32px;
  color: #240d57;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 55px;
    margin-bottom: 17px;
  }
`
export const EventContainer = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 55px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 65px;
  }
`
export const EventInfo = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`
export const EventInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  min-width: 200px;
`

export const Head = styled.h5`
  font-style: normal;
  font-weight: ${fontWeight.bold};
  font-size: 16px;
  line-height: 18px;
  color: #240d57;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`
export const SubHead = styled.h6`
  font-style: normal;
  font-weight: ${fontWeight.bold};
  font-size: 14px;
  line-height: 16px;
  color: #240d57;
  color: #4f4f4f;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`
export const IconDiv = styled.figure`
  display: none;
  margin-left: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`

export const User = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #828282;
  span {
    font-weight: ${fontWeight.bold};
  }
  @media screen and (min-width: 375px) {
    font-size: 18px;
    line-height: 21px;
  }
`
