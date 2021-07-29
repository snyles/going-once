import { useContext, useEffect, useState } from "react";
import ItemCategoryFilter from "../components/ItemCategoryFilter";
import ItemFeed from "../components/ItemFeed";
import Page from "../components/Page";
import { UserContext } from "../lib/UserContext";
import * as itemService from "../services/itemService"

export default function Favorites () {
  const [favorites, setFavorites] = useState([]);
  const [filtered, setFiltered] = useState([])
  const user = useContext(UserContext)

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await itemService.getFavorites(user._id)
      setFavorites(favoritesData)
    }
    fetchFavorites()
  },[user])

  return (
    <Page>
      <h1 className="bottomBorder">My Favorites</h1>
      <ItemCategoryFilter items={favorites} setFiltered={setFiltered} />
      <ItemFeed items={filtered} />
    </Page>
  )
}