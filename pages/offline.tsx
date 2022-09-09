import Head from "next/head"

const Offline = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <Head>
        <title>You are offline</title>
        <link rel="icon" href="/no_connection.png" />
      </Head>
      <div className="mt-[20px] flex flex-col items-center space-y-4 text-white">
        <img src="/no_connection.png" className="w-[120px] h-[120px]" />
        <h1 className="text-4xl font-bold">server response</h1>
        <h1>It seems you are not connected to the internet</h1>
        <button
          onClick={() => {
            window.location.reload()
            window.location.href = "/"
          }}
          className="font-bold text-white px-8 py-3 rounded border-2 border-white hover:scale-105 transition-all duration-500 ease-in-out"
        >
          reload
        </button>
      </div>
    </div>
  )
}

export default Offline
