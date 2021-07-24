import tokenService from "../services/tokenService";
const BASE_URL = "/api/items/";

export async function getAllItems() {
    const res = await fetch(
      BASE_URL,
      {
        headers: new Headers({'Content-Type': 'application/json'})
      },
      { mode: "cors" });
    return await res.json();
  }

export function postItem(item) {
  console.log("service", item)
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

export async function deleteItem(item) {
  const res = await fetch(
    BASE_URL,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" });
  return await res.json();
}