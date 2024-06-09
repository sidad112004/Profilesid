import React from 'react';

function About() {
    return (
        <div>

            <div className=' h-screen '>
                <div className=' h-1/6 flex justify-center items-end font-bold font-serif text-3xl '>

                </div>
             
                <div className='h-5/6   flex flex-col md:flex-row'>

                    <div className=' md:h-full h-1/2 md:w-1/2 w-full  flex flex-col items-center '>
                        <h1 className='text-3xl font-bold font-mono md:mt-9'>
                            Education
                        </h1>
                        <div className=' w-full flex md:flex-row flex-col justify-around items-center h-full'>
                            <div className=' md:h-2/3 h-1/3 md:w-2/5 w-full  border '>
                                <div className='h-full flex flex-col  w-full'>
                                    <div className='flex justify-center h-1/6  w-full items-center bg-slate-500'>
                                        <h1 className='font-bold md:text-lg flex justify-center items-center md:p-3 p-1'>Government College 
                                        of Engineering Karad</h1>
                                    </div>
                                    <div className='md:p-3 font-semibold md:text-xl flex md:flex-col items-start p-1 md:gap-6'>
                                        
                                        <div className='flex flex-col md:gap-6'>
                                        <li>Information technology</li>
                                        <li>3rd Year</li>
                                        </div>

                                        <div className='flex flex-col md:gap-6'>
                                        <li>2022-2026</li>
                                        <li>CGPA-8.5</li>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className=' md:h-2/3 h-1/3 md:w-2/5 w-full  border '>
                                <div className='h-full flex flex-col  w-full'>
                                    <div className='flex justify-center h-1/6  w-full items-center bg-slate-500'>
                                        <h1 className='font-bold md:text-lg flex justify-center items-center md:p-3 p-1'>Sanjay Ghodaewat</h1>
                                    </div>
                                    <div className='md:p-3 font-semibold md:text-xl flex md:flex-col items-start p-1 md:gap-6'>
                                        
                                        <div className='flex flex-col md:gap-6'>
                                        <li>Science</li>
                                        <li>JEE-93.25 percentile</li>
                                        </div>

                                        <div className='flex flex-col md:gap-6'>
                                        <li>MHT-CET-96.84 percentile</li>
                                        <li>2020-2022</li>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>

                    <div className='md:h-full h-1/2  md:w-1/2 '>
                        sid
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
