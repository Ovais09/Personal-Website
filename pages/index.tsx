import Copyright from '../components/Copyright'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home() {


  const [opacity, setOpacity] = useState(0)
  const [opacitySpan, setOpacitySpan] = useState(0)
  const [opacityOvais, setOpacityOvais] = useState(0)
  const [opacityOvais2, setOpacityOvais2] = useState(0)
  const [opacityContact, setOpacityContact] = useState(0)


  //set the opacity to 1 after 1 second
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 500)
    setTimeout(() => {
      setOpacitySpan(1)
    }, 1000)
    setTimeout(() => {
      setOpacityOvais(1)
    }
      , 2000)
    setTimeout(() => {
      setOpacityOvais2(1)
    }
      , 3000)
    setTimeout(() => {
      setOpacityContact(1)
    }
      , 6000)
  }, [])





  return (
    <>
      <style jsx> {`
        section {
         margin-top: -5px;
         height: auto;
         width: 100%;
         position: absolute;
         
        }
        #ovais-face {
          display: inline-block;
          width: auto;
          float: right;
          margin-right: 5px;
          margin-top: 100px;          
          margin-bottom: 100px;
          border-radius: 50%;
          opacity: ${opacity};
          transition: opacity 1s;
        }
        h1 {
          display: inline-block;
          width: 50%;
          height: auto;
          float: left;
          height: 25%;
          font-size: 20px;
          font-family: 'Courier New', Courier, monospace;
          text-align: justify;
          font-size: 36px;
        }
        span {
          display: inline-block;
          margin-top: 200px;
          opacity: ${opacitySpan};
          transition: opacity 3s;
        }
        div {
          margin-left: 60px;
        }
        .ovais {
          opacity: ${opacityOvais};
          transition: opacity 2s;
        }
        .ovais2 {
          opacity: ${opacityOvais2};
          transition: opacity 4s;
        }
        .contact {
          margin-left: 0px;
          position: absolute;
          // border: 2px solid black;
          margin-top: -150px; 
          display: inline-block;         
          padding-bottom: 100px;
          opacity: ${opacityContact};
          transition: opacity 5s;
        }
        .email {
          margin-left: -200px;
          position: absolute;
          margin-top: 225px;
        }
        .phone {
          margin-left: -200px;
          position: absolute;
          margin-top: 260px;
      `}</style>

      <section>
        <div>
          <img id="ovais-face" src='/ovais-face.JPG' alt='Ovais face' height='500' />
          <span>THIS IS ME</span>
          <br />
          <br />
          <h1 className='ovais'>OVAIS AZEEM</h1>
          <br />
          <br />
          <br />
          <br />
          <p className='ovais2'>I am a fourth year Software Engineering student at the University of Ottawa who is passionate about programming and web development.
            I have worked in both the public and private sectors and I am currently seeking a CO-OP job for the Summer of 2023.
            My primary programming language <br /> is JavaScript, however I am also well versed in a wide variety of programming langauges including TypeScript, Java, C#, and Python. <br /> I am expected to graduate in June 2024.
            <br />
            <br />
            This is a website that I have created to showcase my skills and projects. Feel free to take a look around and contact me if you have any questions!
          </p>
          <br />
          <div className='contact'>
            <img src='/map.png' alt='map' height='25' width='25' />
            <span>Ottawa, Ontario, Canada</span>
            <img className='email' src='/email.png' alt='email' height='25' width='25' />
            <span className='email'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ovazeem100@gmail.com</span>
            <img className='phone' src='/telephone-call.png' alt='phone' height='25' width='25' />
            <span className='phone'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1 (613) 413 - 5434</span>
          </div>
        </div>
      </section>
      <Copyright />



    </>
  )
}
