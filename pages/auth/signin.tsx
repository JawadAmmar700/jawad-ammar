import { motion } from "framer-motion"
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }: { providers: any }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 360 }}
            className="p-3 rounded text-black font-bold bg-slate-50 hover:bg-slate-200 cursor-pointer"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </motion.button>
        </div>
      ))}
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
