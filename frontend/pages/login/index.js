import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const [scale, setScale] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const switchPage = () => {
    setScale(0)
    setTimeout(() => {
      router.push("/register")
    }, 300)
  }

  const login = () => {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setScale(0)
      setTimeout(() => {
        router.push("/")
      }, 300)
    },1000)
  }

  return <>
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: scale }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }} className={"flex justify-center items-center h-screen"}>
      <div className={"w-96 mx-4"}>
        <p className={"text-3xl font-bold mb-4 text-slate-600"}>🌐 Socialia</p>
        <input className={"input w-full mb-4"} placeholder={"Username"} disabled={isLoading}/>
        <input className={"input w-full mb-4"} type="password" placeholder={"Password"} disabled={isLoading}/>
        <div className={"flex justify-end gap-4 mb-4"}>
          <button onClick={login} className={"button-dark w-full" + (isLoading ? " cursor-no-drop":"")} disabled={isLoading}>{isLoading ? "🤔 Loading...":"Login 👉"}</button>
        </div>
        <div className="w-full text-end">
          <button onClick={switchPage} className="underline text-blue-600">I don't have an account</button>
        </div>
      </div>
    </motion.div>
  </>
}
