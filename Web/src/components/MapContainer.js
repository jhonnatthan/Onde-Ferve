import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const styles = {
  mapStyles: {
    width: "100%",
    height: "100%"
  }
};

export const MapContainer = props => {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = () => {
    // setMarkers([...markers, obj]);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const {
          coords: { latitude, longitude }
        } = pos;

        const obj = { lat: latitude, lng: longitude, name: "Sua posição" };
        setPosition(obj);
        setLoading(false);
      },
      () => {
        alert("Erro ao descobrir sua posição");
      }
    );
  };

  useEffect(() => {
    getLocation();
    getEvents();
  }, []);

  const markerClick = marker => {
    if (props.markerClick) props.markerClick(marker);
  };

  const displayMarkers = () => {
    return markers.map((marker, index) => {
      const { name, ...position } = marker;
      return (
        <Marker
          key={index}
          id={index}
          position={position}
          name={name}
          icon={{
            url: "assets/images/icon.png"
          }}
          onClick={() => markerClick(marker)}
        />
      );
    });
  };

  return loading ? (
    <p>Carregando mapa...</p>
  ) : (
    <Map
      zoom={18}
      google={window.google}
      style={styles.mapStyles}
      initialCenter={position}
    >
      {displayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBm9px0l2QzS6kSEePuIEcIHv01dMVO5jc"
})(MapContainer);
