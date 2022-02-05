import React, { useState } from "react"
import { CheckCircleIcon } from "@heroicons/react/solid"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Contact = React.forwardRef<HTMLDivElement>((props, refContact) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  })
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    } else {
      controls.start({
        x: -100,
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [inView])

  const SendEmail = async (e: any) => {
    e.preventDefault()
    if (name && email) {
      window.open(
        `mailto:${
          process.env.NEXT_PUBLIC_TO_EMAIL
        }?subject=${encodeURIComponent(
          subject
        )}&body=hello I'm ${encodeURIComponent(name)} (${encodeURIComponent(
          email
        )}): ${encodeURIComponent(message)}`
      )
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }
  }

  return (
    <div id="Contact" ref={refContact} className="w-full h-[900px]">
      <div className="relative top-36 flex justify-center items-center">
        <motion.form
          animate={controls}
          ref={ref}
          className="flex flex-col space-y-3"
          onSubmit={SendEmail}
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Contact Me</h1>
            <p className="xl:w-[700px] w-[300px] md:w-[500px] text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur at accusamus repudiandae dignissimos debitis
              voluptatem quam itaque ullam dicta nostrum.
            </p>
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-white">Name*</label>
            <input
              required
              type="text"
              value={name}
              size={35}
              id="contactName1"
              name="contactName1"
              onChange={e => setName(e.target.value)}
              className="w-full h-8 px-1 outline-none border-2 text-black rounded focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-white">Email*</label>
            <input
              required
              type="text"
              value={email}
              size={35}
              placeholder="1234@example.com"
              id="contactName2"
              name="contactName2"
              onChange={e => setEmail(e.target.value)}
              className="w-full px-1 h-8 outline-none border-2 text-black rounded focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-white">Subject</label>
            <input
              type="text"
              value={subject}
              size={35}
              id="contactName3"
              name="contactName3"
              onChange={e => setSubject(e.target.value)}
              className="w-full px-1 h-8 outline-none border-2 text-black rounded focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-white">Message</label>

            <textarea
              cols={30}
              rows={10}
              className="w-full px-1 h-[150px] outline-none border-2 text-black rounded focus:border-blue-500"
              value={message}
              id="contactName4"
              name="contactName4"
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="mt-10 flex items-center justify-center space-x-2 w-[160px] h-[50px] text-white font-semibold rounded outline-none border-2 transition-all duration-100 border-white hover:text-black hover:bg-white">
            <p>Send Email</p>

            <CheckCircleIcon className="w-[30px] transition delay-150 duration-150 text-green-500" />
          </button>
        </motion.form>
      </div>
    </div>
  )
})

export default Contact
