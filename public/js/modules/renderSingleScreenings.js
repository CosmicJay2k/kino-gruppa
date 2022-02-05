import { fetchSingleScreenings } from "./fetchScreenings.js";

export async function renderSingleScreenings(id) {
  const screenings = await fetchSingleScreenings(id);
  const container = document.querySelector(".right-container-content-calendar");

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  screenings.forEach((screening) => {
    const newScreening = document.createElement("div");

    //Add time of screening
    const dateTimeArr = screening.attributes.start_time.split("T");
    const timeArr = dateTimeArr[1].split(":");

    const date = new Date(dateTimeArr[0]).toLocaleDateString(
      "se-SE",
      dateOptions
    );

    const newTime = document.createElement("h3");
    const newTimeNode = document.createTextNode(
      date + ". " + timeArr[0] + ":" + timeArr[1]
    );
    newTime.appendChild(newTimeNode);

    //Add room of screening
    const newRoom = document.createElement("p");
    const newRoomNode = document.createTextNode(screening.attributes.room);
    newRoom.appendChild(newRoomNode);

    newScreening.appendChild(newTime);
    newScreening.appendChild(newRoom);
    container.appendChild(newScreening);
  });
}
