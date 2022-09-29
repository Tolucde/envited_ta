import styled from 'styled-components'

export const Icon = styled.img`
  display: block;
  width: ${(props) => `${props?.size}px` || '15px'};
  height: ${(props) => `${props?.size}px` || '15px'};
  user-select: none;
  ${(props) => props?.css || ''}
`
