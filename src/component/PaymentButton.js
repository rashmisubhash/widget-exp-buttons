import React, { useState } from "react"

const PaymentButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(!open)}>Pay</button>
            {open && (
                <div style={{border: "1px solid black", padding: "20px", margin: "20px", width: "60%"}}>
                    <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                    <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                    <input type="text" style={{marginBottom: "10px", width: "100%"}}></input>
                    <input type="text" style={{marginBottom: "0px", width: "100%"}}></input>
                </div>
            )}
        </div>

    )
}

export default PaymentButton