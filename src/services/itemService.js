import tokenService from "../services/tokenService";
const BASE_URL = "/api/items/";

export function getAllItems() {
  return fetch(
    BASE_URL,
    {
      headers: new Headers({'Content-Type': 'application/json'})
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function getItemsByCity(city) {
  const formatCity = city.replace(', ','-')
  const url = `${BASE_URL}city/${formatCity}`
  console.log("url", url)
  return fetch(
    url,
    {
      headers: new Headers({'Content-Type': 'application/json'})
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function getItemsById(id) {
  const url = `${BASE_URL}${id}`;
  return fetch(
    url,
    {
      headers: new Headers({'Content-Type': 'application/json'})
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function postItem(item) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: { Authorization: "Bearer " + tokenService.getToken(), 'content-type': 'application/json'},
      body: JSON.stringify(item)
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function postComment(data) {
  console.log(data)
  const url = `${BASE_URL}${data.itemId}`;
  const commentData = {comment: data.comment, postedBy: data.postedBy}
  return fetch(
    url,
    {
      method: "POST",
      headers: { Authorization: "Bearer " + tokenService.getToken(), 'content-type': 'application/json'},
      body: JSON.stringify(commentData)
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function deleteItem(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function addOrRemoveFavorite(id) {
  const url = `${BASE_URL}/favorite/${id}`
  return fetch(
    url,
    {
      method: "PUT",
      headers: { Authorization: "Bearer " + tokenService.getToken()}
    },
    { mode: "cors" })
  .then(res => res.json())
}

export function getFavorites(userId) {
  const url = `${BASE_URL}/favorite/${userId}`
  return fetch(
    url,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken(), 'content-type': 'application/json'},
    },
    { mode: "cors" })
  .then(res => res.json())
}