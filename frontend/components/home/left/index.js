import {motion} from "framer-motion"
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
            <div className={"hidden xl:block w-[300px] mt-4"}> 
                <div className="fixed w-[300px] bg-white rounded-md drop-shadow-md mb-4 p-4">
                    <p className="flex-auto font-bold text-slate-600 mb-4">Me</p>
                    <div className="flex justify-center">
                        <div className="w-[150px] h-[150px] rounded-full bg-gray-200 mb-4"></div>
                    </div>
                    <p className="text-center font-bold text-slate-600">rynx</p>
                    <p className="text-center mb-4 text-slate-600">this is bio</p>
                    <div className="flex">
                        <div className="flex-auto">
                            <p className="text-center font-bold text-slate-600">Followers</p>
                            <p className="text-center mb-4 text-slate-600">0</p>
                        </div>
                        <div className="flex-auto">
                            <p className="text-center font-bold text-slate-600">Following</p>
                            <p className="text-center mb-4 text-slate-600">0</p>
                        </div>
                    </div>
                    <button className="button-dark w-full mb-2">Edit Profile ✍️</button>
                    <button onClick={logout} className="button-red w-full">Logout 🚪🚶</button>
                </div>
            </div>
        </motion.div>
    </>
}