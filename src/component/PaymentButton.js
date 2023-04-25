import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentButton = ({ eventUrl }) => {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [buttonTheme, setButtonTheme] = useState("");
  const [tickets, setTickets] = useState();
  const [desc, setDesc] = useState(false);
  // const [eventUrl, setEventUrl] = useState("")

  const [eventDetails, setEventDetails] = useState(null);
  const [widgetLink, setWidgetLink] = useState(null);

  window.konfhubButton("jt-75dc36e9");

  async function getEventDetails(btn_id) {
    let result = await axios.get(
      "https://dev-api.konfhub.com/event/buttons/" + btn_id
    );
    result = result.data.button_details;
    setEventDetails(result);
    console.log(result);
    setWidgetLink(
      `https://dev.konfhub.com/widget/${result.event_url
      }?desc=${!result.hide_ticket_description}&tickets=${result.attached_ticket_ids.toString()}`
    );
  }

  useEffect(() => {
    // button id
    let button_id = document.currentScript?.getAttribute("button_id")
      ? document.currentScript.getAttribute("button_id")
      : "dev_btn_607220c204ce";
    window.konfhubButton(button_id);
    if (button_id.includes("dev_btn")) getEventDetails(button_id);

    // let buttonText = document.currentScript?.getAttribute("data-button_text")
    //     ? document.currentScript.getAttribute("data-button_text")
    //     : "Register"; // 1
    // let buttonTheme = document.currentScript?.getAttribute("data-button_theme")
    //     ? document.currentScript.getAttribute("data-button_theme")
    //     : "#fb5850"; // 2
    // // let buttonTheme = document.currentScript?.getAttribute('data-button_theme') ? document.currentScript.getAttribute('data-button_theme') : "#fb5850"; // 2
    // let tickets = document.currentScript?.getAttribute("data-tickets")
    //     ? document.currentScript.getAttribute("data-tickets")
    //     : ""; // 2
    // let tickets_desc = document.currentScript?.getAttribute("data-tickets_desc")
    //     ? document.currentScript.getAttribute("data-tickets_desc")
    //     : false; // 2

    // setButtonText(buttonText);
    // setButtonTheme(buttonTheme);

    // setTickets(tickets);
    // setDesc(tickets_desc);
    // setEventUrl(eventUrl)
  }, []);

  return (
    eventDetails != null &&
    widgetLink != null && (
      <div>
        <button
          style={{
            padding: "12px 25px",
            background: eventDetails.brand_color,
            color: "white",
            border: "1px solid",
            outline: "none",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        >
          {eventDetails.button_name}
        </button>
        {open && eventUrl && (
          <>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                opacity: "0.6",
                position: "fixed",
                top: "0",
                left: "0",
              }}
            ></div>
            <div
              className="modal-container"
            >
              <button
                style={{
                  position: "absolute",
                  zIndex: "5",
                  right: "20px",
                  fontWeight: "100",
                  top: "16px",
                  fontSize: "18px",
                  color: "#fb5850",
                  border: "1px solid #fb5850",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              >
                X
              </button>
              <iframe
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  height: "100%",
                }}
                title="reg"
                src={widgetLink}
              />
            </div>
          </>
        )}

        <style jsx>{
          `
          .modal-container {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: "0px solid black";
            width: "400px";
            height: "70vh";
            z-index: "10";
            box-shadow: "0px 0px 20px #383838";
            border-radius: "10px";
            overflow: "hidden";
          }
          
          @media (max-width: 768px) {
            .modal-container {
              width: 100%;
              position: relative;
              transform: translate(0px);
              left: 0%;
              top: 0%;
            }
          }
          `
        }</style>
      </div>
    )
  );
};

export default PaymentButton;
