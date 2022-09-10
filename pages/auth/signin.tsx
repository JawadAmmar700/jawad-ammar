import { motion } from "framer-motion";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/future/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Providers } from "../../lib/types";

export default function SignIn({ providers }: { providers: Providers[] }) {
  return (
    <div className="w-full h-screen flex justify-center bg-[#000000]">
      <div className="flex flex-col space-y-5 mt-24 items-center">
        {/* <Image
          src="/jawad.png"
          width={250}
          height={250}
          alt="J"
          placeholder="blur"
          blurDataURL="/blur.png"
        /> */}
        <div className="flex justify-center items-center space-x-2">
          <h1 className="font-bold text-white text-xl">Log in to </h1>
          <Image
            src="/jawad.png"
            width={30}
            height={30}
            alt="J"
            placeholder="blur"
            blurDataURL="/blur.png"
          />
        </div>
        {Object.values(providers).map((provider: Providers) => (
          <div key={provider.name}>
            <motion.button
              whileHover={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              }}
              className={`p-3 rounded text-white flex items-center space-x-2 font-bold bg-slate-50 cursor-pointer ${
                provider.id === "google" ? "bg-[#6B4FBB]" : "bg-[#24292E]"
              }`}
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              {provider.id === "google" ? (
                <FcGoogle className="w-5 h-5" />
              ) : (
                <FaGithub className="w-5 h-5" />
              )}
              <p>Continue with {provider.name}</p>
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
