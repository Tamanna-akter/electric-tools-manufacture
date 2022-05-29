import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const Tools = () => {
  const navigate = useNavigate();
  const {
    data: tools,
    isLoading,
    error,
  } = useQuery("tools", () =>
    fetch(`http://localhost:5000/tools`).then((res) =>
      res.json()
    )
  );
  if (error) {
    toast.error(error.message);
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" px-5">
      <h2 className=" text-center text-4xl mb-5 mt-3">
        Our Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools &&
          tools.slice(0, 3).map((tool, key) => (
            <div key={key} className="card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img src={tool.img} width={400} height={225} alt="Shoes" />
              </figure>
              <div className="card-body justify-end">
                <div>
                  <h2 className="card-title pb-3">{tool.name}</h2>
                  <p className=" pb-1">{tool.description}</p>
                  <p className=" pb-1">
                    Unit-price: {tool.unit_price}
                  </p>
                  <p className=" pb-1">
                    Min-Order-Quantity: {tool.min_quantity}
                  </p>
                  <p className=" pb-1">
                    Availabel-Quantity: {tool.available_quantity}
                  </p>
                  <div className="card-actions justify-center">
                    <button
                      onClick={() => {
                        navigate(`/purchase/${tool._id}`);
                      }}
                      className="btn btn-sm btn-primary mt-5"
                    >
                      Purchase now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tools;