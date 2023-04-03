import { useEffect, useState } from "react"

/*
 * usage:
 * const isTablet = useMediaQuery("(max-width: 767.98px)")
 */
export const useMediaQuery = (queryString = "(min-width: 767.98px)") => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = window.matchMedia(queryString)
      query.onchange = evt => {
        if (query.matches) {
          setIsMatch(true)
        } else {
          setIsMatch(false)
        }
      }
      query.onchange()
    }
  }, [queryString])

  return isMatch
}
