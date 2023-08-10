import axios from "axios";

export const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/auth/books",
});

googleBooksApi.get("/v1/volumes?q=search+terms");
