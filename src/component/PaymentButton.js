import React, { useEffect, useState } from "react";
import axios from "axios";
import KH_logo from "./KH_logo.svg";

const PaymentButton = ({ eventUrl }) => {
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  const [eventDetails, setEventDetails] = useState(null);
  const [widgetLink, setWidgetLink] = useState(null);

  // Get event details based on the button id
  async function getEventDetails(btn_id, env) {
    let result = await axios.get(
      "https://dev-api.konfhub.com/event/buttons/" + btn_id
    );
    result = result.data.button_details;
    setEventDetails(result);
    setWidgetLink(
      `${env === "dev"
        ? "https://dev.konfhub.com/widget/"
        : "https://konfhub.com/widget/"
      }${result.event_url
      }?desc=${!result.hide_ticket_description}&tickets=${result.attached_ticket_ids.toString()}&btnBg=${result.brand_color.substring(
        1
      )}&tertiaryBg=${result.brand_color.substring(1)}`
    );
  }

  function checkMediaQuery() {
    setScreenSize(window.screen.availWidth);
  }

  // Add a listener for when the window resizes
  window.addEventListener("resize", checkMediaQuery);

  window.konfhubButton("jt-75dc36e9");

  useEffect(() => {
    // button id
    let button_id = document.currentScript?.getAttribute("button_id") ? document.currentScript.getAttribute("button_id") : "dev_btn_12084d609076";
    window.konfhubButton(button_id);
    if (button_id.includes("dev_btn")) getEventDetails(button_id, "dev");
    else getEventDetails(button_id, "prod");
    setScreenSize(window.screen.availWidth);
  }, []);

  return (
    eventDetails != null &&
    widgetLink != null &&
    screenSize != null && (
      <div>
        <button
          className="reg-button"
          style={{
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
            fontWeight: "500",
            padding: "12px 30px 12px 25px",
            background: eventDetails.brand_color,
            color: "white",
            border: "none",
            outline: "none",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            letterSpacing: "1px",
            fontFamily: "Prompt,sans-serif"
          }}
          onClick={() => setOpen(!open)}
        >
          <img src={"https://dev-media.konfhub.com/footerlogo+(1).svg"} alt="kh logo" style={{
            width: "20px",
            height: "20px",
            transform: "translateY(-1px)",
            marginRight: "5px"
          }} />
          {eventDetails.button_name}
        </button>
        {open && (
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
            <div className="modal-container">
              <button
                style={{
                  position: "absolute",
                  zIndex: "5",
                  right: "0px",
                  fontWeight: "100",
                  top: "0px",
                  fontSize: "18px",
                  color: "white",
                  border: "1px solid #999999",
                  background: "#999999",
                  cursor: "pointer",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "5px",
                  padding: "2px 7px 4px",
                }}
                onClick={() => setOpen(false)}
              >
                &#10006;
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

        <style jsx>{`
          .scroll {
            overflow-y: scroll;
          }
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: transparent;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 30px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .modal-container {
            position: ${screenSize > 700
            ? "absolute !important"
            : "relative !important"};
            left: ${screenSize > 700 ? "50% !important" : "0% !important"};
            top: ${screenSize > 700 ? "50% !important" : "0% !important"};
            transform: ${screenSize > 700
            ? "translate(-50%, -50%) !important"
            : "translate(0px) !important"};
            border: 0px solid black !important;
            width: ${screenSize > 700 ? "600px !important" : "100% !important"};
            height: 90vh !important;
            z-index: 10 !important;
            box-shadow: 0px 0px 20px #383838 !important;
            border-radius: 10px !important;
            overflow: hidden !important;
          }

          @media screen and (max-width: 768px) {
            .modal-container {
              width: 100% !important;
              position: relative !important;
              transform: translate(0px) !important;
              left: 0% !important;
              top: 0% !important;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default PaymentButton;
