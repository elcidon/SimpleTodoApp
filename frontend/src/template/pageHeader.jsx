import React from 'react'

export default props => (
  <header>
    <h2 className="display-5 pt-3 pb-3">{props.title} <small>{props.small}</small></h2>
  </header>
)