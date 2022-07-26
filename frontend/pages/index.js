

export default function Home() {
  return <>
  <div className={"flex justify-center items-center h-screen"}>
    <div className={"w-96 mx-4"}>
      <p className={"text-3xl font-bold mb-4 text-slate-600"}>🌐 Socialia</p>
      <input className={"input w-full mb-4"} placeholder={"Username"}/>
      <input className={"input w-full mb-4"} placeholder={"Password"}/>
      <div className={"flex justify-end gap-4"}>
        <button className={"button"}>Login 👉</button>
        <button className={"button-dark"}>Register 👆</button>
      </div>
    </div>
  </div>
  </>
}
