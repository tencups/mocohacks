import React from 'react';
import Iframe from "react-iframe";
import "../styles/Schedule.css"

function Schedules() {
  return (
    <div className="pleaseCenter schedules">
      <div className="schedulePage">
        <h1 className="title">Schedule</h1>
        <p style={{ marginBottom: "50px" }}>Schedule will be modified accordingly to accommodate guest speakers*</p>
        <Iframe
          url="https://airtable.com/embed/shrgO9QNnZJYWcvb7?=pink&layout=card&viewControls=on"
          width="100vw"
          height="100%"
          frameBorder="0"
          className="airtable-embed"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </div>
    </div >
  )
}

export default Schedules;