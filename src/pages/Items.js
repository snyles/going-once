import { useContext, useEffect, useState } from "react";
import ItemFeed from "../components/ItemFeed";
import Map from "../components/Map";
import Page from "../components/Page";
import { LocationContext } from "../lib/LocationContext";
import * as itemService from "../services/itemService"

export default function ItemsPage () {
  const [items, setItems] = useState([]);
  const locData = useContext(LocationContext);

  useEffect( () => {
    async function fetchItems() {
      if (locData.location.name) {
        const itemsData = await itemService.getItemsByCity(locData?.location?.name)
        console.log(itemsData)
        setItems(itemsData)
      }
    }
    fetchItems();
  },[locData])

  return (
    <Page>
      <Map items={items} />
      <ItemFeed items={items} />
    </Page>
  )
}