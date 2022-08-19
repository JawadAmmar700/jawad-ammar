import { useState, useEffect } from "react"

const useTrackScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  )
  const [trackHeight, setTrackHeight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= screenHeight - 64) {
        setTrackHeight(true)
      } else {
        setTrackHeight(false)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return trackHeight
}

export default useTrackScreenHeight
