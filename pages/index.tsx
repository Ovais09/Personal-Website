import Copyright from '../components/Copyright'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home() {


  const [opacity, setOpacity] = useState(0)
  const [opacitySpan, setOpacitySpan] = useState(0)
  const [opacityOvais, setOpacityOvais] = useState(0)
  const [opacityOvais2, setOpacityOvais2] = useState(0)
  

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
  }, [])





  return (
    <>
      <style jsx> {`
        section {
         background-color: rgb(248,251,254);
         margin-top: -5px;
         height: auto;
         width: 100%;
         position: absolute;
         
        }
        img {
          display: inline-block;
          width: auto;
          float: right;
          margin-right: 30px;
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
          transition: opacity 1s;
        }
        div {
          margin-left: 60px;
        }
        button:hover {
          background-color: rgb(248,251,254);
          border: 2px solid black;
          border-radius: 10px;
          font-size: 20px;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;
          font-size: 36px;
          cursor: pointer;
          color: rgb(248,251,254);
          background-color: black;
        }
        .ovais {
          opacity: ${opacityOvais};
          transition: opacity 1s;
        }
        .ovais2 {
          opacity: ${opacityOvais2};
          transition: opacity 1s;
        }
      `}</style>

      <section>
        <div>
          <img src='/ovais-face.JPG' alt='Ovais face' height='500' />
          <span>THIS IS ME</span>
          <br />
          <br />

          <h1 className='ovais'>OVAIS AZEEM</h1>
          <br />
          <br />
          <br />
          <br />
          <p className='ovais2'>This is a website I made that showcases who I am and my skills. Feel free to look around and contact me whenever you want. My contact information can be found in the contact page.</p>
        </div>
      </section>
      <Copyright />



    </>
  )
}
