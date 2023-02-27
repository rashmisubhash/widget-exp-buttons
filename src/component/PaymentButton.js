import React, { useState } from "react"

const PaymentButton = ({eventUrl}) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(!open)}>Pay</button>
            {open && (
                <>
                <div style={{width: "100vw", height: "100vh", backgroundColor: "black", opacity: "0.6", position: "fixed", top: "0", left: "0"}}></div>
                <div style={{border: "1px solid black", width: "400px", height: "70vh", position: "fixed", top: "50%", left: "50%", marginLeft: "-200px", marginTop: "-35vh", zIndex: "10"}}>
                    {/* <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                    <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                    <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                <input type="text" style={{marginBottom: "0px", width: "100%"}}></input> */}
                    <iframe title="reg" src={`https://dev.konfhub.com/widget/jt-75dc36e9`} style={{width: "100%", height: "100%"}} />
                </div>
                </>
            )}
        </div>

    )
}

export default PaymentButton