import { useContext, useEffect, useState } from "react";
import Page from "../components/Page";
import { UserContext } from "../lib/UserContext";
import * as itemService from "../services/itemService"

export default function Favorites () {
  const [favorites, setFavorites] = useState([]);
  const user = useContext(UserContext)

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await itemService.getFavorites(user._id)
      console.log(favoritesData)
      setFavorites(favoritesData)
    }
    fetchFavorites()
  })

  return (
    <Page>


    </Page>
  )
}