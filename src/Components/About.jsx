import React from 'react';

function About() {
    return (
        <div className='flex md:flex-row flex-col min-h-screen bg-gradient-to-br from-base-100 to-base-200'>
            {/* Hero Section with Animations */}
            <div className="hero md:w-1/2 animate-fade-in">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold animate-slide-in-top">Hello there 👋</h1>
                        <div className="py-6 font-semibold text-lg animate-fade-in-delay">
                            <p className="mb-4">I'm a passionate developer studying Information Technology at Government College of Engineering, Karad.</p>
                            <div className="stats stats-horizontal shadow animate-pop-in">
                                <div className="stat">
                                    <div className="stat-title">Current GPA</div>
                                    <div className="stat-value text-primary">8.5</div>
                                    <div className="stat-desc">/10.0</div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary hover:scale-105 transition-transform duration-300 animate-bounce-in">
                            <a href="https://www.linkedin.com/in/siddesh-dhanlobhe-4594b028b" target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Timeline Section */}
            <div className="md:w-1/2 p-8 animate-slide-in-right">
                <ul className="timeline timeline-snap-icon timeline-vertical">
                    {[
                        {
                            year: "2020",
                            title: "Kale Vidyamadhir",
                            subtitle: "SSC - 92.8%",
                            details: ["Semi-English", "State Board"],
                            align: "start"
                        },
                        {
                            year: "2022",
                            title: "Sanjay Ghodawat",
                            subtitle: "HSC - 93.25%ile",
                            details: ["JEE Main: 93.25%ile", "MHTCET: 96.84%ile"],
                            align: "end"
                        },
                        {
                            year: "2026 (Expected)",
                            title: "GCOE Karad",
                            subtitle: "CGPA: 8.5",
                            details: ["B.Tech IT", "3rd Year"],
                            align: "start"
                        }
                    ].map((item, index) => (
                        <li key={index} className="group hover:scale-[1.02] transition-transform duration-300">
                            <hr className="bg-primary/50" />
                            <div className="timeline-middle">
                                <div className="animate-pulse w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`timeline-${item.align} mb-10 p-6 bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                                <time className="font-mono italic text-primary">{item.year}</time>
                                <div className="text-xl font-black mt-2">{item.title}</div>
                                <div className="text-sm text-secondary">{item.subtitle}</div>
                                <div className="mt-2 space-y-1">
                                    {item.details.map((detail, i) => (
                                        <div key={i} className="badge badge-outline mr-2 mb-2 animate-fade-in">{detail}</div>
                                    ))}
                                </div>
                            </div>
                            {index < 2 && <hr className="bg-primary/50" />}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;