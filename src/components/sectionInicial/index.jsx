
function SectionInicial() {
    return (
        <section class="w-full h-screen rounded-bl-[120px] flex items-center justify-center bg-gradient-to-r from-red-400 to-red-400" >
            <div className=" w-full h-screen bg-imgInicio bg-cover md:bg-auto bg-no-repeat bg-left flex flex-col items-center justify-center " >


                <div className=" w-full flex flex-col items-center justify-center " >

                    <div className=" w-full flex flex-col items-center justify-center" >
                        <h2 className="text-center w-80 md:w-auto font-semibold text-4xl md:text-7xl text-gray-50" >A modern publishing platform</h2>
                        <p className="text-gray-50 text-lg font-light md:text-xl mt-6" >Grow your audince and build your online brand</p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-6 mt-20" >
                        <button className="bg-gray-50 px-7 py-3 rounded-full text-red-400 font-bold text-lg " >Start for Free</button>
                        <button className="bg-transparent border-2 px-7 py-3 rounded-full text-gray-50 font-bold text-lg" >Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionInicial;