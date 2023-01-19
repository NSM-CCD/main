import cookie from "cookie"

const { cuvid } = cookie.parse(document.cookie)

export const getVisitorKey = () => typeof window !== undefined && cuvid
