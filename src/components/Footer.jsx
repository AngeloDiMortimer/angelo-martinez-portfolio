const Footer = () => {
    return (
        <footer className="bg-obscurePurple flex flex-col text-slate-50 p-4 py-6 justify-center items-center mt-8">
            <div className="container flex items-center text-center md:text-left flex-col md:flex-row justify-between">
                <div className="logo-container flex flex-col gap-2">

                        <div className="logo">
                                <h1 className="text-xl font-semibold md:text-3xl">Angelo Martínez</h1>
                        </div>

                </div>

                <div className="flex flex-col items-center md:items-end">
                            <div className="text-center text-lg text-white mt-6 items-start">
                                Copyright &copy; 2025
                            </div>                            
                </div>  
            </div>
        </footer>
    )
}

export default Footer;