import React from "react";

function JobCard(prop){
    return (
        <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Company Name:</strong>{prop.companyName}
          </li>
          <li>
            <strong>Title:</strong>{prop.title}
          </li>
          <li>
            <strong>Job Address:</strong> {prop.jobAddress}
          </li>
          <li>
            <strong>Start Date:</strong>{prop.start}
          </li>
          <li>
            <strong>End Date:</strong>{prop.end}
          </li>
          <li>
            <strong>Job Tech:</strong>{prop.jobTech}
          </li>
          <li>
            <strong>Job Skills:</strong>{prop.jobSkills}
          </li>
          <li>
            <strong>Big Projects Worked on:</strong>{prop.project}
          </li>
          <li>
            <strong>Major Accomplishments:</strong>{prop.majorAccomplish}
          </li>
        </ul>
      </div>
    </div>
    )
}

export default JobCard;