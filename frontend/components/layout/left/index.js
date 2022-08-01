import {motion} from "framer-motion"
import { useRouter } from "next/router"
import Link from "next/link"
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

    const logout = () => {
        setY("100%")
        setOpacity(0)
        props.data.setLogout(true)
        setTimeout(()=>{
            router.push("/login")
        },300)
    }

    return <>
        <motion.div initial={{opacity:0,y:"100%"}} animate={{opacity:opacity,y:y}} transition={{ duration: 0.3, ease: [0,0.7,0.2,1.0] }}>
            <div className={"ml-2 xl:block w-[55px] xl:w-[250px] mt-2 xl:mt-4"}> 
                <div className="fixed bg-white w-[55px] xl:w-[250px] rounded-md drop-shadow-md mb-4">
                    
                    <div onClick={()=>{
                        router.push("/home")
                    }} className={`cursor-pointer w-full transition-all hover:bg-slate-100 bg-white p-4 rounded-md ${(router.query.page == "home" ? "font-bold":"")}`}>🏠 <span className="hidden xl:inline">Home</span></div>
                    
                    <div onClick={()=>{
                        router.push("/profile")
                    }} className={`cursor-pointer w-full transition-all hover:bg-slate-100 bg-white rounded-md p-4 ${(router.query.page == "profile" ? "font-bold":"")}`}>🧍 <span className="hidden xl:inline">Profile</span></div>
                
                    <div onClick={()=>{
                        router.push("/notifications")
                    }} className={`cursor-pointer w-full transition-all hover:bg-slate-100 bg-white rounded-md p-4 ${(router.query.page == "notifications" ? "font-bold":"")}`}>🔔 <span className="hidden xl:inline">Notifications</span></div>
                    
                    <div onClick={()=>{
                        router.push("/settings")
                    }} className={`cursor-pointer w-full transition-all hover:bg-slate-100 bg-white rounded-md p-4 ${(router.query.page == "settings" ? "font-bold":"")}`}>⚙️ <span className="hidden xl:inline">Settings</span></div>
                    
                    <div className="cursor-pointer" onClick={logout}>
                        <div className="w-full transition-all hover:bg-red-500 bg-red-400 text-white rounded-md p-4">👈 <span className="hidden xl:inline">Logout</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}