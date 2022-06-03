import { useState } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  if (navigator.geolocation) {
    navigator.permissions.query({ name: "geolocation" }).then((res) => {
      if (res.state === "granted") {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        });
      }

      if (res.state === "prompt") {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        });
      }
    });
  }

  return [latitude, longitude];
};

export default useLocation;
