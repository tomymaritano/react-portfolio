import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Github = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const endDate = new Date("2024-12-31T23:59:59Z");
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 90); // Últimos 90 días de 2024

    fetch(`https://api.github.com/users/tomymaritano/events/public`)
      .then((response) => response.json())
      .then((data) => {
        const filteredEvents = data.filter((event) => {
          const eventDate = new Date(event.created_at);
          return eventDate >= startDate && eventDate <= endDate;
        });
        setEvents(filteredEvents);
      })
      .catch((error) => console.error("Error fetching GitHub events:", error));
  }, []);

  return (
    <Box>
      <Text>Mi Actividad de GitHub (Últimos 90 días de 2024):</Text>
      {/* Renderiza aquí tus eventos filtrados */}
      {events.map((event, index) => (
        <Box key={index} p={2}>
          <Text fontWeight="bold">{event.type.replace(/Event$/, "")}</Text>
          <Text fontSize="sm">
            {new Date(event.created_at).toLocaleDateString()}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Github;
