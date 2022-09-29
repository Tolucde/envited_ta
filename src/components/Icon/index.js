import React from 'react'
import PropType from 'prop-types'

import { Icon as _Icon } from './styles'
import registry from './registry'

function Icon({ name, size, css, alt }) {
  const iconName = React.useMemo(
    () => registry[`${name}`]?.default,
    [registry[name]?.default, name]
  )

  return (
    <_Icon
      css={css}
      size={size}
      src={iconName}
      alt={!alt ? `${name}-icon` : alt}
    />
  )
}

Icon.defaultProps = {
  name: '',
  size: 15,
  alt: '',
  css: '',
}

Icon.propTypes = {
  name: PropType.string,
  size: PropType.number,
  alt: PropType.string,
  css: PropType.any,
}

export default React.memo(Icon)
