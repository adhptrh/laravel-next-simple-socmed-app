import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Home from "../../pages/home"
import Profile from "../../pages/profile"
import { useRouter } from "next/router"

export default function (props) {

    const [y, setY] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const router = useRouter()

    useEffect(()=>{
        if (props.data.logout) {
            setY("100%")
            setOpacity(0)
        }
    }, [props.data.logout])

    return <>
        <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: opacity, y: y }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.0] }} className="w-[800px] h-96 mt-2 xl:mt-4">
            {
            props.page === "profile" && <Profile /> ||
            props.page === "home" && <Home />
            }
        </motion.div>
    </>
}