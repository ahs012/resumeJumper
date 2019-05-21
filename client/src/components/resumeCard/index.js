import React from "react";
import Resume from "../../pages/Resume";
import { PromiseProvider } from "mongoose";

function resumeCard(prop){
    return (
        <div className="card" >
      
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong>{prop.name}
          </li>
          <li>
            <strong>Date:</strong>{prop.date}
          </li>
          <li>
            <strong>Address:</strong> {prop.Address}
          </li>
          <li>
            <strong>Skills</strong>{prop.skills}
          </li>
          <li>
            <strong>Tech:</strong>{prop.tech}
          </li>
        </ul>
        <button onClick={()=>
          prop.clicked(prop.id)}
          // .then loadJobs();}
        >Select this Resume</button>
      </div>
    </div>
    )
}

export default resumeCard;