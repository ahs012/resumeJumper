import React from "react";
import './style.css';
function Jumbotron({ children }) {
  return (
    <div style={{margin: '10%', color: 'white', backgroundColor: '#000080' }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
