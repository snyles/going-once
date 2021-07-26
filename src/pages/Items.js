import { useEffect, useState } from "react";
import ItemFeed from "../components/ItemFeed";
import Map from "../components/Map";
import Page from "../components/Page";
import * as itemService from "../services/itemService"

export default function ItemsPage () {
  const [items, setItems] = useState([]);

  useEffect( () => {
    async function fetchItems() {
      const itemsData = await itemService.getAllItems()
      // console.log(itemsData)
      setItems(itemsData)
    }
    fetchItems();
  },[])

  return (
    <Page>
      {items.length && 
      <>
        <Map items={items} />
        <ItemFeed items={items} />
      </>
      }
    </Page>
  )
}