export const isOnline = async () => {
  try {
    const res = await fetch("https://google.com")
    return res.status === 200
  } catch (error) {
    return false
  }
}
