export default function () {
    return <>
        <div className="bg-white w-full rounded-md drop-shadow-md mb-4 p-4">
            <p className="font-bold text-slate-600 mb-4">Create post</p>
            <textarea className="w-full border-2 h-[100px] outline-none shadow-inner rounded-md p-2"></textarea>
            <div className="flex">
                <div className="flex text-slate-400 justify-center items-center font-bold p-4 rounded-md border-2 border-dashed">
                    <div>
                        + Add Image/Video/Sound 🖼️
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <button className="button-dark">Post 🚀</button>
            </div>
        </div>
        <p className="font-bold mb-4 text-slate-400">Your Following</p>
        {[...Array(1)].map(() => {
            return <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="bg-white w-full h-72 rounded-md shadow mb-4"></div>
        })}
    </>
}