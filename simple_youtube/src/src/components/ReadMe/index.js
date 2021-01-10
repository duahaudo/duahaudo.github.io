/* eslint-disable import/no-anonymous-default-export */
import "./styles.scss";

import React from 'react';

export default () => {
  const iframeRef = React.useRef(null);

  React.useEffect(() => {
    fetch('https://api.github.com/repos/duahaudo/simple_youtube/contents/readme.MD')
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        iframeRef.current.src = 'data:text/html;base64,' + encodeURIComponent(data['content']);
      });
  }, [])

  return <div className="read-me-wrapper">
    <iframe title="read-me" id="github-iframe" src="" ref={iframeRef}></iframe>
  </div>
}
