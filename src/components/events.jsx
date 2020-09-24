import { useState } from "react";

export function Events() {
  const [events, setEvents] = useState(null);
  const apiURL = "https://api.hackillinois.org/event/";

  fetch(apiURL)
    .then((resp) => resp.json())
    .then((data) => setEvents(data.events));
  return events;
}
