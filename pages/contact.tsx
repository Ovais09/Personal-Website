
import Copyright from "../components/Copyright"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {


    function submitEmail(e: any) {
        e.preventDefault()

        emailjs.sendForm('service_p8p1x68', 'template_kxf055u', e.target, '7l76CUxFVJ-gRgkJk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Email sent successfully")
        e.target.reset()
        
    }


    return (
        <>
            <style jsx>{`
                
                section {
                        background-color: rgb(248,251,254);
                        margin-top: 5px;
                        height: 100%;
                        width: 100%;
                        position: absolute;
                   }
                   h1 {
                        font-size: 2.5rem;
                        text-align: center;                    
                        margin-top: 50px;
                   }
                   label {
                        display: block;
                        margin-top: 1rem;
                    }
                    input, textarea {
                        width: 500px;
                        padding: 0.5rem;
                        margin: 0.5rem 0;
                    }
                    input:focus, textarea:focus {
                        outline: none;
                    }
                    button {
                        background-color: black;
                        color: white;
                        border: none;
                        padding: 0.5rem 1rem;
                        margin-top: 1rem;
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
                    form {
                        margin-left: 350px;
                        width: 200px;                    
                    }
            `}</style>
            {/* <h1>CONTACT</h1> */}
            <section>
                <form onSubmit= {submitEmail}>
                    <h1>CONTACT</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols={30} rows={10} required />
                    <br />
                    <button type="submit">Send</button>
                </form>
                <Copyright />
            </section>
        </>
    )
}