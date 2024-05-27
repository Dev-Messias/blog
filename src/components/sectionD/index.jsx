import React from 'react';
import ilutImg from '../../assets/images/illustration-editor-desktop.svg'
import ilutMob from '../../assets/images/illustration-editor-mobile.svg'

function SectionD() {
    return (
        <div className='w-full flex flex-col  py-6 gap-10 ' >
            <div className='w-full flex flex-row justify-center items-center mt-24 ' >
                <h2 className='text-3xl font-bold text-blue-950' >Designed for the future</h2>
            </div>
            <div className='flex flex-col md:flex-row-reverse' >
                <div className='flex md:hidden flex-row items-center justify-center' >
                    <img src={ilutMob} alt="img" />
                </div>
                <div className='hidden md:flex flex-row items-center justify-center ' >
                    <img src={ilutImg} alt="img" />
                </div>
                <div className='w-full flex flex-row' >
                    <div className='w-full flex flex-col justify-center items-center' >
                        <h3 className='font-bold px-3 md:px-52  text-blue-950 text-2xl w-56 md:w-full text-center md:text-start mt-10 lg:px-20' >Intruducing an extensible aditor</h3>
                        <p className='text-center text-lg text-gray-400 px-3 md:px-52 mt-2  md:text-start lg:px-20' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor rem architecto ea eum iste, adipisci nemo odio facere recusandae nobis at facilis necessitatibus itaque consequatur velit? Blanditiis, minus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error cum saepe temporibus debitis nam quidem praesentium laborum. Ad quam dolor vero suscipit at? Ut itaque dolorum facere illum </p>

                        <h3 className=' font-bold text-blue-950 text-2xl w-56  text-center md:text-start mt-10 md:w-full px-3 md:px-52 lg:px-20 ' >Intruducing an extensible aditor</h3>
                        <p className='text-center md:text-start text-lg text-gray-400 px-3 md:px-52 mt-2 lg:px-20' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor rem architecto ea eum iste, adipisci nemo odio facere recusandae nobis at facilis necessitatibus itaque consequatur velit? Blanditiis, minus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error cum saepe temporibus debitis nam quidem praesentium laborum. Ad quam dolor vero suscipit at? Ut itaque dolorum facere illum </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionD;