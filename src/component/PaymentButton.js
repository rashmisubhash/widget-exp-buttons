import React, { useEffect, useState } from "react"

const PaymentButton = ({eventUrl}) => {
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");
    const [buttonTheme, setButtonTheme] = useState("");
    const [tickets, setTickets] = useState();
    const [desc, setDesc] = useState(false)
    // const [eventUrl, setEventUrl] = useState("")

    window.konfhubButton("jt-75dc36e9");
    
    useEffect(() => {
        let buttonText = document.currentScript?.getAttribute('data-button_text') ? document.currentScript.getAttribute('data-button_text') : "Register"; // 1
        let buttonTheme = document.currentScript?.getAttribute('data-button_theme') ? document.currentScript.getAttribute('data-button_theme') : "#fb5850"; // 2   
        // let buttonTheme = document.currentScript?.getAttribute('data-button_theme') ? document.currentScript.getAttribute('data-button_theme') : "#fb5850"; // 2   
        let tickets = document.currentScript?.getAttribute('data-tickets') ? document.currentScript.getAttribute('data-tickets') : ""; // 2   
        let tickets_desc = document.currentScript?.getAttribute('data-tickets_desc') ? document.currentScript.getAttribute('data-tickets_desc') : false; // 2   

        setButtonText(buttonText)
        setButtonTheme(buttonTheme)

        setTickets(tickets)
        setDesc(tickets_desc)
        // setEventUrl(eventUrl)
        console.log(buttonText, buttonTheme, eventUrl, "asd")
    }, [])
    console.log(buttonText, buttonTheme, eventUrl)

    return (
        <div>
            <button style={{padding: "12px 25px", background: buttonTheme, color: "white", border: "1px solid", outline: "none", fontSize: "16px", borderRadius: "5px", cursor: "pointer"}} onClick={() => setOpen(!open)}>{buttonText}</button>
            {open && eventUrl && (
                <>
                <div style={{width: "100vw", height: "100vh", backgroundColor: "black", opacity: "0.6", position: "fixed", top: "0", left: "0"}}></div>
                <div style={{border: "0px solid black", width: "400px", height: "70vh", position: "fixed", top: "50%", left: "50%", marginLeft: "-200px", marginTop: "-35vh", zIndex: "10" , boxShadow: "0px 0px 20px #383838", borderRadius: "10px", overflow: "hidden"}}>
                    <button style={{position: "absolute", zIndex: "5", right: "20px", fontWeight: "100", top: "16px", fontSize: "18px", color: "#fb5850", border: "1px solid #fb5850", cursor: "pointer"}} onClick={() => setOpen(false)}>X</button>
                    <iframe style={{border: "none", outline: "none", width: "100%", height: "100%"}} title="reg" src={`https://dev.konfhub.com/widget/${eventUrl}`} />
                </div>
                </>
            )}
        </div>

    )
}

export default PaymentButton