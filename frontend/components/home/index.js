import { motion } from "framer-motion"
import Middle from "./middle"
import Left from "./left"
import Right from "./right"
import { useState } from "react"
export default function () {

    const [logout, setLogout] = useState(false)

    return <>
        <div className={"flex gap-2 xl:gap-4 justify-center"}>
            <Left data={{ logout, setLogout }} />
            <Middle data={{ logout, setLogout }} />
            <Right data={{ logout, setLogout }} />
        </div>
    </>
}
