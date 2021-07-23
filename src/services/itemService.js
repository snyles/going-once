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