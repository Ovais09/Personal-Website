export default function Copright() {

    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
            <style jsx>{`
                footer {
                    background-color: white;
                    height: 50px;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    z-index: 1;
                    border-top: 2px solid black;
                    text-align: center;
                }
                p, span {
                    margin-top: 10px;
                    margin-left: 10px;
                    font-size: 20px;
                    font-family: 'Courier New', Courier, monospace;
                    color: black;
                    display: block;
                }
            `}</style>
            <footer>
                <p>Copright © {year} Ovais Azeem <br/> Website made using NextJS and hosted on Firebase </p>
                <br/>
                
            </footer>
        </>
    )
}