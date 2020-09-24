import React from "react";
import "./display.css";
import moment from "moment";
import "moment-timezone";
/*import { Events } from "./events.jsx";*/

export function Display({ events, id }) {
  /*const [events, setEvents] = useState(null);
  const apiURL = "https://api.hackillinois.org/event/";

  fetch(apiURL)
    .then((resp) => resp.json())
    .then((data) => setEvents(data.events));*/
  return (
    <div className="events">
      {events &&
        events.map((event, index) => {
          const date = moment
            .unix(event.startTime)
            .tz("America/Chicago")
            .format();
          const day = new Date(date).toDateString();
          const from = moment
            .unix(event.startTime)
            .tz("America/Chicago")
            .format()
            .substring(11, 16);
          const to = moment
            .unix(event.endTime)
            .tz("America/Chicago")
            .format()
            .substring(11, 16);
          const description = event.description;
          return (
            <div className="event" key={index}>
              <h2>{event.name}</h2>
              <div className="details">
                <p>{day}</p>
                {description === " " ? null : <p>{description}</p>}
                {from !== to ? (
                  <p>
                    {from}-{to}
                  </p>
                ) : (
                  <p>{from}</p>
                )}
                <p>Event Type: {event.eventType}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
