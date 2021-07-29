import { useEffect } from "react";
import styled from "styled-components";
import { MAP_ID } from "../assets/data/MAP_ID";

const MapDiv = styled.div`
  max-width: 500px;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  /* @media (max-width: 768px) {
    width: 100%;
  } */
`;

export default function ItemMap({coords}) {

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("item-map"), {
      center: coords,
      zoom: 18,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
      mapId: MAP_ID,
    });
    new window.google.maps.Marker({
      position: coords,
      map,
    })
  },[coords])

  return (
    <MapDiv id="item-map">Loading...</MapDiv>
  );
}