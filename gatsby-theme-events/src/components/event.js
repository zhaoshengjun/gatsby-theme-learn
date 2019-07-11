import React from "react";

export const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h1>
      {name} ({location})
    </h1>
    <p>
      {startDate} - {endDate}
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
);
