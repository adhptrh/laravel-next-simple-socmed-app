import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout";

export default function() {
    const router = useRouter()

    return <>
    <Layout page={router.query.page} />
    </>
}