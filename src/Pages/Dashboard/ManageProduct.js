import React, { useState } from "react";
import { useQuery } from "react-query";
import Modal from "../Shared/Modal";
import Loading from "../Shared/Loading";

const ManageProduct = () => {
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch(`https://localhost:5000/parts`).then((res) =>
      res.json()
    )
  );

  const handleDelete = (answer) => {
    if (answer) {
      fetch(`https://localhost:5000/toolsById?id=${deleteId}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" flex justify-center">
      <div className=" lg:pl-5 w-full">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Manage product
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Available Quantity</th>
                <th>Net Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tools &&
                tools.map((item, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td className=" capitalize">{item.name}</td>
                    <td>{item.available_quantity} pcs</td>
                    <td>{item.unit_price} tk</td>
                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => {
                          setModal(true);
                          setDeleteId(item._id);
                        }}
                        className="btn btn-error btn-xs text-white"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {modal && (
          <Modal setModal={setModal} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default ManageProduct;