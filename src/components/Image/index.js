import React from 'react'

import { Img } from './styles'

import Placeholder from '../../assets/images/others/profile_placeholder.jpg'

export default function Image({
  src,
  as = null,
  lazyLoad = true,
  ...otherProps
}) {
  const [_src, setSrc] = React.useState(src)

  return as ? (
    React.createElement(as, {
      className: lazyLoad ? 'lazyload' : '',
      ...(lazyLoad ? { 'data-src': _src } : { src: _src }),
      ...otherProps,
    })
  ) : (
    <Img
      {...(lazyLoad ? { 'data-src': _src } : { src: _src })}
      className={lazyLoad ? 'lazyload' : ''}
      {...otherProps}
      onError={(evt) => {
        setSrc(Placeholder)
      }}
    />
  )
}
