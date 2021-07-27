import { useContext, useEffect, useState } from "react";
import ItemCategoryFilter from "../components/ItemCategoryFilter";
import ItemFeed from "../components/ItemFeed";
import Map from "../components/Map";
import MapFeedToogle from "../components/MapFeedToogle";
import Page from "../components/Page";
import { LocationContext } from "../lib/LocationContext";
import * as itemService from "../services/itemService"

export default function ItemsPage () {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([])
  const locData = useContext(LocationContext);
  const [display, setDisplay] = useState('feed')
  
  useEffect( () => {
    async function fetchItems() {
      if (locData.location.name) {
        const itemsData = await itemService.getItemsByCity(locData?.location?.name)
        setItems(itemsData)
      }
    }
    fetchItems();
  },[locData])

  const displaySwitch = () => {
    return display === 'feed' ? 
      <ItemFeed items={items} /> :
      <Map items={items} />
  }

  return (
    <Page>
      <Map items={filtered} />
      <ItemCategoryFilter items={items} setFiltered={setFiltered} />
      <ItemFeed items={filtered} setFiltered={setFiltered} />
      <MapFeedToogle display={display} setDisplay={setDisplay} />
      {displaySwitch()}
      {/* <Map items={items} />
      <ItemFeed items={items} /> */}
    </Page>
  )
}