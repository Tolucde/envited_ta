import { typography, theme } from '../../assets/styles'
import styled from 'styled-components'
import { fontWeight } from '../../assets/styles/typography'

const { fonts } = typography
const { colors } = theme

export const CreatePageStyles = styled.main`
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media screen and (min-width: 768px) {
    padding: 88px 150px;
    column-gap: 50px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`
export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    font-size: 34px;
  }
`
export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    padding: 0;
    width: 50%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  row-gap: 24px;
  font-family: ${fonts.Helvetica};
  width: 100%;
  margin-bottom: 40px;
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`

export const CreatePageImage = styled.figure`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1280px) {
    height: 400px;

    width: 50%;
  }
`
