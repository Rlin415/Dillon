
import React from 'react';
import Photo from './Photo.jsx';

class PhotoGrid extends React.Component {

  componentDidMount() {
    this.props.getMediums();
  }

  render() {
    return <div className="photo-grid">
      { this.props.mediums.map((medium, i) =>
        <Photo medium={medium} key={i}/>)
      }
    </div>
  }
}

export default PhotoGrid;
