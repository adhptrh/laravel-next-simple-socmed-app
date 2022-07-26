import Link from "next/link"

export default function Home() {
  return <>
  <div className={"flex justify-center items-center h-screen"}>
    <div className={"w-96 mx-4"}>
      <p className={"text-3xl font-bold mb-4 text-slate-600"}>🌐 Socialia</p>
      <input className={"input w-full mb-4"} placeholder={"Username"}/>
      <input className={"input w-full mb-4"} placeholder={"Email"}/>
      <input className={"input w-full mb-4"} placeholder={"Password"}/>
      <input className={"input w-full mb-4"} placeholder={"Confirm your password"}/>
      <div className={"flex justify-end gap-4 mb-4"}>
        <button className={"button-dark w-full"}>Register 👉</button>
      </div>
      <div className="w-full text-end">
      <Link href="/login" >
        <a className="underline text-blue-600">I have an account</a>
      </Link>
      </div>
    </div>
  </div>
  </>
}
