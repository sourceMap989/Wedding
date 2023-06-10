import React from "react";
import PropTypes from "prop-types";
import './LiveStream.css'
const LiveStream = ({ embedId }) => (
    
  <div className="video-responsive">
    
    <iframe
        width= "100%"
        height= "100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);9

LiveStream.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default LiveStream;