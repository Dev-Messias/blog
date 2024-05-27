import imgPhone from '../../assets/images/illustration-phones.svg'

function SectionPhone() {
    return (
        <section className="w-full h-auto md:h-72 rounded-bl-[80px] rounded-tr-[80px] bg-blue-950 flex flex-col md:flex-row mb-10 mt-72 px-0 md:px-20" >
            <div className=" py-4 flex flex-col md:flex-row" >
                <div>
                    <img className="z-50 mt-[-250px] md:mt-[-120px] md:z-50 md:w-[1500px] xl:mt-[-70px] 2xl:mt-[-230px] 2xl:w-[1800px]  xl:w-[2000px]  " src={imgPhone} alt="Phone" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:mt-32" >
                <h2 className="w-80 md:w-auto text-center text-gray-50 font-bold text-4xl md:text-6xl xl:text-5xl mb-8" >State of the art infrastruture</h2>
                <p className="text-center md:text-start text-lg  text-gray-300 mb-32" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit et rerum aliquam sapiente animi nemo sit consequuntur voluptas tempora beatae quia cupiditate veritatis ad quod iste cum dolorum corporis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut corporis adipisci quam dicta, dolorem magni similique ea minima a maxime nemo, provident aspernatur odit, molestias hic quisquam incidunt officia velit!</p>
            </div>
        </section>
    );
}

export default SectionPhone;