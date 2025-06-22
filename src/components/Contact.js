const Contact = () => {
    return (
        <>
            <h1 className="flex text-2xl">Contact Page</h1>
            <div className="w-[700px] flex">
                <form>
                    <input className="border border-black flex mt-1.5" type="text" name="name" placeholder="Enter Name"/>
                    <input className="border border-black flex mt-1.5" type="text" name="msg" placeholder="Enter Message"/>
                    <button className="flex bg-cyan-950 text-amber-50 mt-1.5">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;