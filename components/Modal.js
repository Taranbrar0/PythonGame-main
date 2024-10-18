import React, { useEffect } from "react";

function Modal(props) {
  // Close the modal when the Escape key is pressed
  const closeOnEsc = (e) => {
    if (e.key === "Escape") {
      props.close();
    }
  };

  // Add event listener for 'keydown' on mount and clean up on unmount
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return () => {
      document.body.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  // Don't render anything if the modal is closed
  if (!props.open) return null;

  // Modal styles for the background and the modal container
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
  };

  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  };

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {props.children}
        <button className="btn btn-success mt-2 mb-4" onClick={props.close}>
          Close
        </button>
      </div>
    </>
  );
}

export default Modal;
