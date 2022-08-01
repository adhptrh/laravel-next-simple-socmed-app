import { motion } from "framer-motion"
import Middle from "./middle"
import Left from "./left"
import Right from "./right"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function (props) {

    const [logout, setLogout] = useState(false)
    const [page, setPage] = useState("")

    return <>
        <div className={"flex gap-2 xl:gap-4 justify-center"}>
            <Left data={{ logout, setLogout, page, setPage }} />
            <Middle page={props.page} data={{ logout, setLogout, page, setPage }} />
            <Right data={{ logout, setLogout }} />
        </div>
    </>
}
