import { motion } from "framer-motion"
import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { GoogleProvider } from "../../lib/types"

export default function SignIn({ providers }: { providers: GoogleProvider[] }) {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col space-y-5 mt-24 items-center">
        <Image
          src="/J.png"
          width={250}
          height={250}
          alt="J"
          placeholder="blur"
          blurDataURL="/blur.png"
        />
        {Object.values(providers).map((provider: GoogleProvider) => (
          <div key={provider.name}>
            <motion.button
              whileHover={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              }}
              className="p-3 rounded text-black flex items-center space-x-2 font-medium bg-slate-50 cursor-pointer"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <p>Sign in with {provider.name}</p>
              <FcGoogle className="w-5 h-5" />
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
