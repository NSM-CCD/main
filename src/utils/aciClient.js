import axios from "axios"

const aciClient = axios.create({
  baseURL: process.env.GATSBY_API_ENDPOINT || "https://classiccarvalue.com/",
})

export default aciClient
