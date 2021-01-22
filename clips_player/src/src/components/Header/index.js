import "./styles.scss"

import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="content">
        <div>Simple Youtube</div>
        <div className="navigator">
          <a href="https://github.com/duahaudo/simple_youtube" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </div>
  )
}