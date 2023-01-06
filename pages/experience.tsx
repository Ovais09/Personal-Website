import Copyright from '../components/Copyright'

export default function Experience() {
    return (
        <>
            <style jsx>{`
                #experience {
                    // position: absolute;
                    margin-top: 70px;
                    font-size: 50px;
                    text-align: center;
                }
                span {
                    font-size: 20px;
                    font-weight: 400;
                    color: red;
                    margin-left: 1000px;
                    position: absolute;
                    margin-top: -45px;

                }
                .div {
                    margin-left: 60px;
                }
                ul {
                    margin-left: 60px;
                }
                section {
                    background-color: rgb(248,251,254);
                    width: 100%;
                    position: absolute;
                }
                img {
                    width: 100px;
                    height: 75px;
                    margin-bottom: -50px;
                    margin-left: 750px;
                    display: inline-block;
                    position: absolute;
                    
                }
                #elections {
                    position: absolute;
                    margin-left: 560px;
                }
                #ericsson {
                    position: absolute;
                    margin-left: 700px;
                }
                .outerdiv {
                    border: 2px solid black;
                    padding: 20px 20px;
                }
                
            `}</style>
            <h1 id='experience'>EXPERIENCE</h1>
            <br />
            <div className='outerdiv'>
                <div className='div'>
                    <h1>Ericsson <img id='ericsson' src='/ericsson.png' alt = 'Ericsson' /></h1>
                    <h2>RF Network Engineer</h2>
                    <span>May 2022 - August 2022</span>
                    <h3>Skills learned/used: (FTP, FileZilla, MS Excel, MS SharePoint, 5G, Network Towers)</h3>
                    <br />
                    <ul>
                        <li>Downloaded files from an FTP server using FileZlla.</li>
                        <li>Created daily GS audits usimg Microsoft Excel and uploaded them to the Ericsson SharePoint.</li>
                        <li>Learned about 5G, cell towers, and other networking related concepts. </li>
                    </ul>
                </div>
            </div>

            <br />
            <br />
            <div className='outerdiv'>
                <div className='div'>
                    <h1>AAOF <img src='/aaof.png' alt = 'AAOF'/></h1>
                    <h2>Web Developer</h2>
                    <span>September 2021 - December 2021</span>
                    <h3>Skills learned/used: (PHP, KML/XML, MySQL, SQL, JavaScript, Google Earth, Hosting)</h3>
                    <br />
                    <ul>
                        <li>Built a Google Earth Application using KML/XML and JavaScript.</li>
                        <li>Built a website using PHP which would allow the user to create routes and placemarks on the Earth Application.</li>
                        <li>Hosted the website using Bluehost and MySQL was chosen as the DBMS of choice. </li>
                    </ul>
                </div>
            </div>

            <div className='outerdiv'>
                <div className='div'>
                    <h1>CFIA <img src='/cfia.png' alt = 'CFIA' /></h1>
                    <h2>Web Programmer</h2>
                    <span>January 2021 - April 2021</span>
                    <h3>Skills learned/used: (C#, ASP.NET, Jira, IIS Express Server, Visual Studio, Azure DevOps)</h3>
                    <br />
                    <ul>
                        <li>Built a webform using the ASP.NET framework which runs on Microsoft&apos;s IIS Express Server.</li>
                        <li>Utilized the Jira REST API in order to create issues on the Jira platform.</li>
                        <li>Utilized Microsoft&apos;s Azure DevOps Server in order to store the CFIA&apos;s code. </li>
                    </ul>
                </div>
            </div>

            <br />
            <br />

            <div className='outerdiv'>
                <div className='div'>
                    <h1> Elections Canada <img id="elections" src='/elections.png' alt = 'Elections Canada'/> </h1>
                    <h2>IT Support Analyst</h2>
                    <span>July 2020 - September 2020</span>
                    <h3>Skills learned/used: (Information Technology, Elections, Android, Modems, Government)</h3>
                    <br />
                    <ul>
                        <li>Managed and administered inventory of devices including: smartphones, wireless modems, etc.</li>
                        <li>Acquired knowledge of IT systems and the IT process within the government environment.</li>
                        <li>Configured BlackBerry phones by following the guidelines made by the Government of Canada.</li>
                    </ul>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <section>
                <Copyright />
            </section>
        </>
    )
}