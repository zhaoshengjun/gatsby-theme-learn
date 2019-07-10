import React from "react";
import { Link } from "gatsby";

const EventList = ({ events }) => {
  return (
    <>
      <h1>Upcoming events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>
              <Link to={event.slug}> {event.name}</Link>
            </strong>
            <p>
              {new Date(event.startDate).toLocaleDateString()} in{" "}
              {event.location}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export { EventList };
