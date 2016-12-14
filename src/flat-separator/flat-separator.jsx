import React from 'react'

require('./flat-separator.scss');

export const FlatSeparatorComponent = (props) => {
  return(
    <div className="FlatSeparatorComponent" style={{margin: props.margin, width: props.width}}></div>
  )
}

export default FlatSeparatorComponent