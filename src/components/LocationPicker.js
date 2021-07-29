import { useEffect } from "react";
import styled from 'styled-components'
import { MAP_ID } from "../data/MAP_ID";

const PickerMap = styled.div`
  min-width: 200px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
`;


export default function LocationPicker({startingCoords, setFinalCoords}) {

  useEffect(() => {
    const map = new window.google.maps.Map(
      document.getElementById("picker-map"), 
      {
        center: startingCoords,
        zoom: 18,
        clickableIcons: false,
        streetViewControl: false,
        mapTypeControl: false,
        mapId: MAP_ID,
      }
    );
    const marker = new window.google.maps.Marker({
      position: startingCoords,
      map,
      shouldFocus: true,
      draggable: true,
      label: "Move Me",
    });
    marker.addListener('dragend', (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }
      console.log(coords)
      setFinalCoords(coords)
    })
  }, [startingCoords, setFinalCoords])

  return (
    <PickerMap id="picker-map" />
  )

}
