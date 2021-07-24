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

  export async function postItem(item) {
    const res = await fetch(
      BASE_URL,
      {
        method: "POST",
        headers: { Authorization: "Bearer " + tokenService.getToken() },
        body: JSON.stringify(item)
      },
      { mode: "cors" });
    return await res.json();
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