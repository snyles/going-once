import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "../lib/LocationContext";
import { MAP_ID } from "../data/MAP_ID";
// import MarkerClusterer from '@googlemaps/markerclustererplus';

// map category icons
import appliances from "../assets/icons/appliances.png"
import sofa from "../assets/icons/sofa.png"
import vegetables from "../assets/icons/vegetables.png"
import home from "../assets/icons/home.png"
import painting from "../assets/icons/painting.png"
import fashion from "../assets/icons/fashion.png"
import toiletries from "../assets/icons/toiletries.png"
import questionmark from "../assets/icons/question-mark.png"
import { useHistory } from "react-router-dom";


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
    resetMarkers()
    const googleMarkers = []
    for (const item of items) {
      const pos = {
        lat: item.lat,
        lng: item.lng,
      }
      let url = item?.picture.split('/')
      url.splice(url.length-3,0,'w_150,h_150,c_fit')
      url = url.join('/')
      const info = new window.google.maps.InfoWindow({
        content: `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <img src=${url} alt=${item.title} />
        `,
      })
      const gMarker = new window.google.maps.Marker({
        position: pos,
        map,
        icon: iconTypes[item.category]
      })

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
    // const markerCluster = new MarkerClusterer(map, googleMarkers, {
    //   imagePath: "https://unpkg.com/@googlemaps/markerclustererplus@1.0.3/images/m",
    // });
  },[items, map])

  const resetMarkers = () => {
    for (const mark of markers) {
      mark.setMap(null)
    }
  }

  return (
    <MapDiv id="map">Loading...</MapDiv>
  );
}