import React from "react";
import useWindowDimensions from "../hooks/getDimensions"
// import mainloader from "../Assets/img/mainloader.svg";

const Loader = ({ text }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="">
        <div
          className="position-fixed w-100"
          style={{
            zIndex: 1100,
            // marginTop: -200,
            top: 0,
            height: "135%",
            marginLeft: width > 992 ? 0 : 0,
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img
                width={150}
                // style={{
                //   filter: 'invert(12%) sepia(17%) saturate(6775%) hue-rotate(321deg) brightness(9238%) contrast(128%)'
                // }}
                src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
                alt="loader"
              />
              {/* <h2 className="text-white w-100 text-center mt-5">{text}</h2> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
