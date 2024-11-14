/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { useAppContext } from "../context/Globalcontext";

const Technologies = () => {
  const { data } = useAppContext();
  const { technologies } = useSelector((store) => store.learner);

  console.log(technologies);

  return (
    <section
      className="row d-flex justify-content-around align-items-center pb-3 mb-5"
      style={{ height: "auto", minHeight: "50vh" }}
    >
      <h1 className="ms-2 my-3 fw-bold">{"I'm good at"}</h1>

      {
        // ITERATE OVER ARRAY
        technologies?.map((item) => {
          return (
            <div
              key={item?.id}
              className="card m-2 bg-info d-flex justify-content-between py-3 shadow"
              style={{ width: "15rem", height: "15rem", backgroundImage: "" }}
            >
              {item.label}

              <button
                className="btn btn-primary"
                onClick={() => alert(`We're Learning ${item.label}`)}
              >
                Click Me
              </button>
            </div>
          );
        })
      }
    </section>
  );
};

export default Technologies;
