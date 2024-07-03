import React from 'react';

function About() {
    return (

        <div className='flex md:flex-row flex-col'>
            <div className="hero bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there,</h1>
                        <div className="py-6 font-semibold text-lg">I am at Government College of Engineering, Karad, pursuing a Bachelor of Technology in Information Technology. With GPA of 8.5/10.0, I have completed coursework in Data Structures, Algorithms, Operating Systems, OOP, and DBMS, laying a solid foundation for my career in software engineering.

                        </div>


                        <button className="btn btn-primary"><a href="https://www.linkedin.com/in/siddesh-dhanlobhe-4594b028b">Linkedin</a></button>
                    </div>
                </div>
            </div>




            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex justify-start md:mt-20">

                <li>

                    <hr/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">School</div>
                        <div>kale vidyamadhir kale</div>
                        <div>semi-english</div>
                        <div>SSC-92.8</div>

                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2022</time>
                        <div className="text-lg font-black">Sanjay Ghodawat</div>
                        <div>12th science</div>
                        <div>JEE main-93.25 percentile</div>
                        <div>MHTCET-96.84 percentile</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2026 expected</time>
                        <div className="text-lg font-black">Goverment college of engineering karad</div>
                        <div>Information technology</div>
                        <div>CGPA-8.5</div>
                        <div>3rd year</div>
                    </div>
                </li>
                <h1></h1>
         </ul>
        </div>
    );
}

export default About;
