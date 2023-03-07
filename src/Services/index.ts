import axios from "axios";

export const api = axios.create({
  baseURL: "https://seudocinhofakeapi.onrender.com/",
  timeout: 8000,
});
