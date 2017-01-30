import * as React from 'react';

const Photo = ({ medium }) => (
  <figure>
    <img src={`https://d2snwnmzyr8jue.cloudfront.net/${medium.artKey}_270.jpeg`}/>
    <figcaption>
      <p>
        Title: {medium.title}
        <br></br>
        Artist: {medium.artistName}
      </p>
    </figcaption>
  </figure>
);

export default Photo;
