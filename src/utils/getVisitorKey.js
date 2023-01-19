import cookie from "cookie"

const { cuvid } = cookie.parse(document.cookie)

export const getVisitorKey = () => cuvid
