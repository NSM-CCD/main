import axios from "axios"

const aciClient = axios.create({
  baseURL:
    process.env.GATSBY_API_ENDPOINT || "https://kniumskbvbsqlfb.herokuapp.com",
})

export default aciClient
