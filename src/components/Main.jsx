import * as React from 'react';
import PhotoGrid from './PhotoGrid.jsx';

const Main = ({ getMediums, mediums }) => (
  <div>    
    <PhotoGrid getMediums={getMediums} mediums={mediums}/>
  </div>
);

export default Main;
