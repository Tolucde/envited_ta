import { typography, theme } from '../../assets/styles'
import styled from 'styled-components'
import { fontWeight } from '../../assets/styles/typography'

const { fonts } = typography
const { colors } = theme

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.Helvetica};
  row-gap: 10px;
  .date {
    padding: 10px;
    cursor: pointer;
  }
`

export const Label = styled.label`
  font-size: 16px;
  width: 100%;
  font-family: ${fonts.Helvetica};
`
export const InputText = styled.input`
  border: solid 1px #ffd7e0;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  &::placeholder {
    font-size: 14px;
    color: #4f4f4f;
  }
`
export const DateForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  input {
    padding-right: 5px;
    cursor: pointer;
    all: unset;
  }
  .date {
    background: white;
    /* transform: translateX(-20px); */
    z-index: 50;

    background: white;
    .rdtPicker {
      transform: translateX(-100px);
    }
    @media screen and (min-width: 576px) {
      .rdtPicker {
        transform: translate(0);
      }
    }
  }
`
