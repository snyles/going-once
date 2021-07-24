import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Page from "../components/Page";
import { LocationContext } from "../lib/LocationContext";

const MapDiv = styled.div`
  max-width: 768px;
  width: 80%;
  height: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Map(props) {
  const locData = useContext(LocationContext)
  const history = useHistory();

  useEffect(() => {
    if (!locData.location.name) {
      history.push('/')
    }
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: locData.location.coords,
      zoom: 12,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
      // disableDefaultUI: true,
      // mapId: MAP_ID,
    });
  },[])


  return (
    <Page>
      {/* <p>{locData?.location?.name}</p>
      <p>{locData?.location?.coords.lat()}</p>
      <p>{locData?.location?.coords.lng()}</p> */}
      <MapDiv id="map">Loading...</MapDiv>
    </Page>
  );
}