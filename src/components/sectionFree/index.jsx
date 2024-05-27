import imgNot from '../../assets/images/illustration-laptop-desktop.svg';
import imgNotMob from '../../assets/images/illustration-laptop-mobile.svg';

function SectionFree() {
    return (
        <div className='w-full flex flex-col xl:flex-row justify-center items-center' >
            <div className='mt-20' >
                <img className='flex md:hidden flex-row justify-center items-center' src={imgNotMob} alt="" />
                <img className='hidden md:flex flex-row justify-center items-center ml-[-140px]' src={imgNot} alt="" />
            </div>
            <div className='w-full flex flex-col justify-center xl:items-start items-center mt-7 py-6 px-8' >
                <h2 className='font-bold text-3xl text-blue-950 ' >Free, open, simple</h2>
                <p className='text-lg text-gray-400 text-center mt-4 xl:text-start' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aliquam quis animi adipisci eos at officia incidunt ullam repudiandae molestiae aut tempora laboriosam nesciunt commodi praesentium eius porro, earum distinctio.</p>
                <h2 className='font-bold text-3xl text-blue-950 mt-8' >Powerful tooling</h2>
                <p className='text-lg text-gray-400 text-center mt-4 xl:text-start' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aliquam quis animi adipisci eos at officia incidunt ullam repudiandae molestiae aut tempora laboriosam nesciunt commodi praesentium eius porro, earum distinctio.</p>
            </div>
        </div>
    )
}

export default SectionFree;