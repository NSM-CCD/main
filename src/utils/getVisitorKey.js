import cookie from "cookie"

const { cuvid } =
  typeof document !== "undefined" ? cookie.parse(document.cookie) : {}

export const getVisitorKey = () => cuvid ?? ""
