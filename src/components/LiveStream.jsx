import React from "react";
import PropTypes from "prop-types";

const LiveStream = ({ embedId }) => (
    
  <div className="video-responsive">
    <h1>LIVE STREAMING</h1>
    <iframe
        width= "90%"
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