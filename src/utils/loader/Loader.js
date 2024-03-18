import React from "react";
import "./loader.scss";
import useWindowDimensions from "./useWindowDimensions";

function Loader({ text }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="">
        <div
          className="position-fixed w-100"
          style={{
            zIndex: 1100,
            marginTop: -200,
            height: "135%",
            marginLeft: width > 992 ? 0 : 0,
            background: "rgb(255 255 255 / 50%)",
            backdropFilter: 'blur(2px)'
          }}
        >
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img
                width={150}
                style={{
                  // filter: 'invert(22%) sepia(97%) saturate(6775%) hue-rotate(321deg) brightness(98%) contrast(108%)'
                }}
                src="\loader\loader.gif"
                alt="loader"
              />
              <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              <h2 className="text-white w-100 text-center mt-5">{text}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
