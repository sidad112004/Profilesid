import React from 'react';

function Home() {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col md:flex-row h-screen'>
                <div className='md:w-1/3 w-full flex justify-center items-center mt-40 md:mt-0 p-5'>
                    <img className='w-1/2 md:w-2/3 ' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="image" />
                </div>
                <div className='md:w-2/3 w-full flex justify-center items-center p-6 md:p-28'>
                    <div>
                        <h1 className='text-2xl md:text-4xl font-bold font-serif mb-4 mt-6 md:mt-0'>I'm Siddesh Dhanlobhe</h1>
                        <h1 className='text-base md:text-xl font-semibold'>
                            I am a dedicated and driven engineering student at Government College of Engineering, Karad, pursuing a Bachelor of Technology in Information Technology. My passion lies in full-stack developmen and problem solving.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
