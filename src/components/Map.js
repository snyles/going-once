import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "../lib/LocationContext";
import MarkerClusterer from '@googlemaps/markerclustererplus';

const MapDiv = styled.div`
  max-width: 768px;
  width: 80%;
  height: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Map({items = []}) {
  const locData = useContext(LocationContext)
  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: locData.location.coords,
      zoom: 12,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
      // disableDefaultUI: true,
      // mapId: MAP_ID,
    });
    setMap(map);
  },[locData])

  useEffect(() => {
    const googleMarkers = []
    for (const item of items) {
      const pos = {
        lat: item.lat,
        lng: item.lng,
      }
      const info = new window.google.maps.InfoWindow({
        content: `
          <h1>${item.title}</h1>
          <p>${item.condition}</p>
          <p>${item.description}</p>
        `,
      })
      const gMarker = new window.google.maps.Marker({
        position: pos,
        map,
      })
      gMarker.addListener('click', () => info.open({
        anchor: gMarker,
        map,
        shouldFocus: true,
      }))
      googleMarkers.push(gMarker)
    }
    // const markerCluster = new MarkerClusterer(map, googleMarkers, {
    //   imagePath: "https://unpkg.com/@googlemaps/markerclustererplus@1.0.3/images/m",
    // });
  },[items, map])


  return (
    <MapDiv id="map">Loading...</MapDiv>
  );
}