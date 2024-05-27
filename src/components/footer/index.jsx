function Footer() {
    return (
        <div className="w-full flex flex-col xl:flex-row justify-center xl:justify-around items-center p-8 bg-slate-800 rounded-tr-[100px] mt-20" >
            <div>
                <h2 className="font-bold text-gray-50 text-6xl mt-5" >Blogr</h2>
            </div>
            <div className="mt-[60px] flex flex-col items-center justify-center " >
                <h3 className="font-semibold text-gray-50 mb-6" >Product</h3>
                <p className="text-gray-300 text-lg" >Overview</p>
                <p className="text-gray-300 text-lg" >Pricing</p>
                <p className="text-gray-300 text-lg" >Marketplace</p>
                <p className="text-gray-300 text-lg" >Features</p>
                <p className="text-gray-300 text-lg" >Integrations</p>
            </div>
            <div className="mt-[30px]" >
                <h3 className="font-semibold text-gray-50 mb-6" >Company</h3>
                <p className="text-gray-300 text-lg" >about</p>
                <p className="text-gray-300 text-lg" >Team</p>
                <p className="text-gray-300 text-lg" >Blog</p>
                <p className="text-gray-300 text-lg" >Carees</p>
            </div>
            <div className="mt-[30px]" >
                <h3 className="font-semibold text-gray-50 mb-6" >Connect</h3>
                <p className="text-gray-300 text-lg" >Contact</p>
                <p className="text-gray-300 text-lg" >Newsletter</p>
                <p className="text-gray-300 text-lg" >Linkedln</p>
            </div>
        </div>
    )
}

export default Footer;