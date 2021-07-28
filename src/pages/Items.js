import { useContext, useEffect, useState } from "react";
import ItemCategoryFilter from "../components/ItemCategoryFilter";
import ItemFeed from "../components/ItemFeed";
import Map from "../components/Map";
import Page from "../components/Page";
import { LocationContext } from "../lib/LocationContext";
import * as itemService from "../services/itemService"

export default function ItemsPage () {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([])
  const locData = useContext(LocationContext);

  useEffect( () => {
    async function fetchItems() {
      if (locData.location.name) {
        const itemsData = await itemService.getItemsByCity(locData?.location?.name)
        setItems(itemsData)
        setFiltered(itemsData)
      }
    }
    fetchItems();
  },[locData])

  return (
    <Page>
      <Map items={filtered} />
      <ItemCategoryFilter items={items} setFiltered={setFiltered} />
      <ItemFeed items={filtered} setFiltered={setFiltered} />
    </Page>
  )
}