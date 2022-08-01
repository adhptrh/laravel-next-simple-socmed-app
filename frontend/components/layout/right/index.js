import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function (props) {

    const [y, setY] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            setY("fixed")
        },300)
    },[])

    useEffect(()=>{
        if (props.data.logout) {
            setY("100%")
            setOpacity(0)
        }
    }, [props.data.logout])
    
    return <>
        <motion.div initial={{opacity:0,y:"100%"}} animate={{opacity:opacity,y:y}} transition={{ duration: 0.3, ease: [0,0.7,0.2,1.0] }}>
            <div className={"hidden 2xl:block w-[300px] mt-4"}> 
                <div className="fixed w-[300px] bg-white rounded-md drop-shadow-md mb-4 p-4">
                    <p className="font-bold text-slate-600">People you might know</p>
                </div>
            </div>
        </motion.div>
    </>
}