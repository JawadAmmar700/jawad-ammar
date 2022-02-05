import setDocTitle from "../Functions/SetDocTitle"

const ScrollIntoView = (ref: any, title: string) => {
  ref.current.scrollIntoView({ behavior: "smooth" })

  title ? setDocTitle(title) : (document.title = `Intro`)
}
export default ScrollIntoView
