
"use client"

export default function Experience() {
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-center mt-24 py-10" id="Experience">
                <h1 className="text-6xl font-bold font-geo text-white text-customGray Experience">
                    Professional Experience
                </h1>
            </div>

            {/* DataAnnotation Section */}
            <div className="flex items-center justify-center mt-10 space-x-10">
                <img
                    src="/images/dataannotation.jpg"
                    className="w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full cursor-pointer"
                    alt="DataAnnotation"
                />
                <div className="text-left">
                    <a href="https://www.dataannotation.tech/" target="_blank">
                      <h2 className="text-5xl font-bold font-geo text-white hover:text-blue-400 transition-colors duration-300">
                            DataAnnotation.tech
                        </h2>
                    </a>
                    <h3 className="text-2xl font-geo text-white text-customGray">
                        Software Engineer, Software Tester, Data Analyst
                    </h3>
                    <p className="text-xl font-geo text-white text-customGray">
                        April 24' - Present
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Tools used: C++, Python (Pandas, Numpy), JavaScript (React, Express), HTML/CSS
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Responsibilities:
                    </p>
                    <ul className="list-disc space-y-2 text-2xl font-geo text-white text-customGray pl-5">
                        <li>
                            Leading processes to uphold code quality and ensure the integrity of AI models through rigorous quality assurance practices.
                        </li>
                        <li>
                            Performing thorough testing across a diverse tech stack including HTML, SQL, JavaScript, React, C++, and Python to validate code functionality and optimal performance.
                        </li>
                        <li>
                            Analyzing and evaluating the accuracy and reliability of AI model outputs, focusing on computer science principles and data analysis to ensure they align closely with intended outcomes and objectives.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Placer Section */}
            <div className="flex items-center justify-center mt-20 space-x-10">
                <img
                    src="/images/Placer.png"
                    className="w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full cursor-pointer"
                    alt="Placer"
                />
                <div className="text-left">
                    <a href="https://www.placerautoregistration.com/" target="_blank">
                    <h2 className="text-5xl font-bold font-geo text-white hover:text-blue-400 transition-colors duration-300">
                            Placer Auto Registration Services
                        </h2>
                    </a>
                    <h3 className="text-2xl font-geo text-white text-customGray">
                        Web Developer, Clerk
                    </h3>
                    <p className="text-xl font-geo text-white text-customGray">
                        June 20' - Present
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Tools used: HTML, CSS, Wordpress
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Responsibilities:
                    </p>
                    <ul className="list-disc space-y-2 text-2xl font-geo text-white text-customGray pl-5">
                        <li>Elevated customer traffic by 40% through website construction, utilizing Google Ads for targeted promotion, Google Analytics for traffic analysis, and proficiency in HTML, CSS, WordPress, and SQL.</li>
                        <li>Managed and meticulously organized paperwork and reports about customer vehicle registrations, ensuring accuracy and compliance. </li>
                        <li>Proficiently transferred data into a tailored database utilizing MySQL and Excel for record-keeping and efficient retrieval.</li>
                    </ul>
                </div>
            </div>

            {/* UCLA Section */}
            <div className="flex items-center justify-center mt-20 space-x-10">
                <img
                    src="images/SMCSTEM.png"
                    className="w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full cursor-pointer"
                    alt="UCLA"
                />
                <div className="text-left">
                    <a href="https://www.smc.edu/student-support/academic-support/counseling/special-support-programs/stem/stem-mas-program.php" target="_blank">
                        <h2 className="text-5xl font-bold font-geo text-white hover:text-blue-400 transition-colors duration-300">
                            UCLA Department of Mathematics, <br /> Santa Monica College STEM SRI
                        </h2>
                    </a>
                    <h3 className="text-2xl font-geo text-white text-customGray">
                        Research Intern, Data Scientist
                    </h3>
                    <p className="text-xl font-geo text-white text-customGray">
                        Summer 2019
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Tools used: Python (Pandas, Numpy, Tensorflow)
                    </p>
                    <p className="text-2xl font-geo text-white text-customGray">
                        Responsibilities:
                    </p>
                    <ul className="list-disc space-y-2 text-2xl font-geo text-white text-customGray pl-5">
                        <li>Analyzed and modeled survey data for the Gang Reduction and Youth Development (GRYD) program, managed by the Mayor's office in Los Angeles.
                        </li>
                        <li>Forecasted risk factors & survey scores for program participants using techniques including Dynamic Mode Decomposition (DMD), Deep Learning w/ Neural Networks, and Support Vector Machine (SVM), employing Python w/ Numpy, Pandas, & Tensorflow.
                        </li>
                        <li>Developed targeted support solutions based on program members' and clients' predictive survey scores.

</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
