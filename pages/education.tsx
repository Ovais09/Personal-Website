import Copright from "../components/Copyright"

export default function Education() {
    return (
        <>
            <style jsx>{`
                #education {
                    // position: absolute;
                    margin-top: 100px;
                    font-size: 50px;
                    text-align: center;
                }
                #current {
                    font-size: 20px;
                    font-weight: 400;
                    color: red;
                    margin-left: 400px;
                }
                div {
                    margin-left: 100px;
                    margin-right: 100px;
                    margin-top: 20px;
                    margin-bottom: 50px;
                }
                h1 {
                    font-size: 30px;
                    font-weight: 400;
                    margin-left: 75px;
                }
                p {
                    font-weight: 400;
                    margin-left: 75px;
                }
                img {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    margin-left: -500px;
                    margin-top: -30px;
                }
            `}</style>
            <h1 id='education'>Education</h1>
            <h1>University of Ottawa</h1>
            <h1>Bachelor of Applied Science, Software Engineering (CO-OP) <span id='current'>2019 - Present</span> <img src = '/uottawa.jpg' alt = 'University of Ottawa'/></h1>
            <p><b>4th year student</b></p>
            <p>Received x2 Merit Scholarship ($1000)</p>
            <p>Received $3000 Admission scholarship</p>
            <br />
            <p>Relevant courses:</p>
            <div>
                <ul>
                        <li>Introduction to Computing I — <b>ITI 1120</b> (Python) </li>
                        <li>Professional Communication and Responsibility — <b>SEG 2900</b> (HTML,CSS,JavaScript)</li>
                        <li>Introduction to Computing II — <b>ITI 1121</b> (Java)</li>
                        <li>Data Structures and Algorithms — <b>CSI 2110</b> (Java)</li>
                        <li>Introduction to Software Engineering — <b>SEG 2105</b> (Java, CircleCI, JUnit, Android Studio, Firebase, UML)</li>
                        <li>Operating Systems — <b>CSI 3131</b> (C, processes, threads, process scheduler)</li>
                        <li>Software Quality Assurance — <b>SEG 3103</b> (Java, Elixir, JUnit, ExUnit, Selenium)</li>
                        <li>Analysis and Design of User Interfaces — <b>SEG 3125</b> (HTML, CSS, JavaScript, React, Bootstrap)</li>
                        <li>Databases I — <b>CSI 2132</b> (SQL, MySQL, ExpressJS)</li>
                    <li>Design and Analysis of Algorithms I — <b>CSI 3105</b> (Big Oh, running time, tracing of algorithms)</li>
                    <li>Software Design and Architecture — <b>SEG3102</b> (Angular, TypeScript, SpringBoot, Kotlin, Docker, NextJS)</li>
                    <li>Software Project Management — <b>SEG4105</b> (NextJS, AWS, MS Project)</li>
                        
                </ul>
            </div>
            <Copright />
        </>
    )
}