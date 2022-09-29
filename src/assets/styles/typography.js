import { Link as NativeLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from './theme'

export const fonts = Object.freeze({
  CP: `'Code Pro LC', sans-serif`,
  Inter: `'Inter', sans-serif`,
  POP: `"Poppins", sans-serif`,
  DMSans: `'DM Sans', sans-serif`,
  Ubuntu: `'Ubuntu', sans-serif`,
  Helvetica: `'Helvetica', sans-serif`,

  Noto: `'Noto sans', sans-serif`,
})

export const fontWeight = Object.freeze({
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
})

export const Link = styled(NativeLink)`
  all: unset;
  cursor: pointer;
  color: ${(props) => (props?.unsetColor ? 'unset' : colors.primaryBlue)};
  &:hover {
    color: ${colors.lightBlue};
    text-decoration: none;
  }
  ${(props) => props?.css ?? ''}
`
