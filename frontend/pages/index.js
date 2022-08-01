import { motion } from "framer-motion"
import Layout from "../components/layout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { redirect } from "next/dist/server/api-utils"

export default function() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/home")
  },[])
  return <></>
}
