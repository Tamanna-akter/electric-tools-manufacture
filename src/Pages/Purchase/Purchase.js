// import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import auth from "../../firebase.init";

const Purchase = () => {
  const [disable, setDisable] = useState(false);
  const [authUser] = useAuthState(auth);
  const [quantity, setQuantity] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toolsId } = useParams();
  const navigate = useNavigate();
  const { data: tools, isLoading } = useQuery("toolsById", () =>
    fetch(
      `https://localhost:5000/toolsById?id=${toolsId}`
    ).then((res) => res.json())
  );

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const minQ = parseInt(tools.min_quantity);
    const maxQ = parseInt(tools.available_quantity);
    if (quantity >= minQ && quantity <= maxQ) {
      const userName = authUser.displayName;
      const email = authUser.email;
      const mobile = event.target.mobile.value;
      const address = event.target.address.value;
      const toolsId = tools._id;
      const toolsName = tools.name;
      // const quantity = event.target.quantity.value;
      const price = parseInt(quantity) * parseInt(tools.unit_price);
      const paymentData = {
        userName,
        email,
        toolsId,
        toolsName,
        price,
        // quantity,
        mobile,
        address,
      };
      // console.log(paymentData);

      await fetch(`https://localhost:5000/purchase`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            event.target.reset();
            toast.success(
              `Item Purchased Successfull. Please pay for confirm order`
            );
            navigate("/dashboard/my-order");
          }
        });
    } else {
      setDisable(true);
      toast.error("You have to place order in our given range");
    }

    setLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center px-5 min-h-screen">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Purchase here
        </h2>
        <div className="card w-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-2xl font-bold">Name: {tools.name}</h2>
            <p>Desc: {tools.description}</p>
            <p>Min_Order_Quantity: {tools.min_quantity}</p>
            <p>Availabel_Quantity: {tools.available_quantity}</p>
            <p>Price_Per_piece: {tools.unit_price}</p>
          </div>
        </div>
        <div className="w-full max-w-lg mx-auto">
          <h2 className=" text-3xl text-primary text-center mt-10 mb-0">
            Provide Your Information
          </h2>
          <form onSubmit={handleForm}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                required
                type="text"
                value={authUser.displayName}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                required
                type="email"
                value={authUser.email}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Quantity:</span>
              </label>
              <input
                required
                type="number"
                name="quantity"
                onKeyUp={(event) => {
                  setQuantity(parseInt(event.target.value));
                  setDisable(false);
                }}
                defaultChecked={parseInt(tools.min_quantity)}
                placeholder={`min Quantity: ${tools.min_quantity}`}
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Mobile:</span>
              </label>
              <input
                required
                type="text"
                name="mobile"
                placeholder="+880"
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <textarea
                required
                name="address"
                className="textarea textarea-primary"
                placeholder=""
              ></textarea>
            </div>
            <button
              disabled={disable}
              className={` btn btn-primary mt-10 w-full ${
                loading && "loading"
              }`}
            >
              {loading ? "" : "Buy now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;