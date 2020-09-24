import React, { useState } from "react";
import hackillinois from "./hackillinois.png";
import "./App.css";
import { Button } from "./components/Button";
import moment from "moment";
import "moment-timezone";

function App() {
  const [events, setEvents] = useState(null);
  const apiURL = "https://api.hackillinois.org/event/";

  function fetchEvents() {
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => setEvents(data.events));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={hackillinois} className="App-logo" alt="logo" />
        {/*<h2 className="Schedule">SCHEDULE</h2>*/}
        <br></br>
        <Button
          id="7"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--schedule"
        >
          Schedule
        </Button>
        {/*<Button
          id="7"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--topleft"
        >
          Aug 7 Fri
        </Button>

        <Button
          id="8"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--tertiary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--topcenter"
        >
          Aug 8 Sat
        </Button>
        <Button
          id="9"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--topright"
        >
          Aug 9 Sun
        </Button>
        <Button
          id="10"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--tertiary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--centerleft"
        >
          Aug 10 Mon
        </Button>
        <Button
          id="11"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--centercenter"
        >
          Aug 11 Tue
        </Button>
        <Button
          id="12"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--tertiary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--centerright"
        >
          Aug 12 Wed
        </Button>
        <Button
          id="13"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--bottomleft"
        >
          Aug 13 Thu
        </Button>
        <Button
          id="14"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--tertiary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--bottomcenter"
        >
          Aug 14 Fri
        </Button>
        <Button
          id="15"
          onClick={fetchEvents}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonPosition="btn--bottomright"
        >
          Aug 15 Sat
        </Button>*/}
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
                    {description === " " ? null : <p>{description}</p>}
                    <p>{day}</p>
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
      </header>
    </div>
  );
}

export default App;
