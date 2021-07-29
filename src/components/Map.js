import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "../lib/LocationContext";
import { MAP_ID } from "../assets/data/MAP_ID";
import { useHistory } from "react-router-dom";

// map category icons
import appliances from "../assets/icons/appliances.png"
import sofa from "../assets/icons/sofa.png"
import vegetables from "../assets/icons/vegetables.png"
import home from "../assets/icons/home.png"
import painting from "../assets/icons/painting.png"
import fashion from "../assets/icons/fashion.png"
import toiletries from "../assets/icons/toiletries.png"
import questionmark from "../assets/icons/question-mark.png"


const MapDiv = styled.div`
  max-width: 768px;
  width: 80%;
  height: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
  .gm-style .gm-style-iw {
    font-family: "Haptic";
    text-align: center;
    font-size: 1.5rem;
  }
`;

const iconTypes = {
  Furniture: sofa,
  Household: home,
  Appliances: appliances,
  Food: vegetables,
  Decor: painting,
  Clothes: fashion,
  Personal: toiletries,
  Other: questionmark,
}

export default function Map({items = []}) {
  const locData = useContext(LocationContext)
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([])
  const history = useHistory();

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: locData.location.coords,
      zoom: 12,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
      mapId: MAP_ID,
    });
    setMap(map);
  },[locData])

  useEffect(() => {
    // reset markers
    for (const mark of markers) {
      mark.setMap(null)
    }
    const googleMarkers = []

    // loop through items
    for (const item of items) {
      // get item position
      const pos = {
        lat: item.lat,
        lng: item.lng,
      }

      // set info popup content
      let infoContent = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>`
      if(item.picture) {
        let url = item?.picture?.split('/')
        url.splice(url.length-3,0,'w_150,h_150,c_fit')
        url = url.join('/')
        infoContent += `<img src=${url} alt=${item.title} />`
      }

      // create info window
      const info = new window.google.maps.InfoWindow({
        content: infoContent
      })

      // create marker
      const gMarker = new window.google.maps.Marker({
        position: pos,
        map,
        icon: iconTypes[item.category]
      })

      // add event listeners
      gMarker.addListener('mouseover', () => info.open({
        anchor: gMarker,
        map,
        shouldFocus: true,
        disableAutoPan: true,
      }))
      gMarker.addListener('mouseout', () => info.close())
      gMarker.addListener('click', () => history.push(`/item/${item._id}`))
      
      googleMarkers.push(gMarker)
    }
    setMarkers(googleMarkers)
  },[items, map, history, markers])

  return (
    <MapDiv id="map">Loading...</MapDiv>
  );
}