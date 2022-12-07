import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pP1aLwjZF2ujx_FBXOVOospj-nGEuMHig98_afYwdCQ",
  },
});
