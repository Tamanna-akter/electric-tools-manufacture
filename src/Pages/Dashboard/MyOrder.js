import React from 'react';

const MyOrder = ({ index, order, setDeleteOrder }) => {
    const { name, email, address, phone, productName, orderQuantity } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{productName}</td>
                <td>{orderQuantity}</td>
                <td>
                    <label onClick={() => setDeleteOrder(order)} htmlFor="my-modal" className="btn btn-error btn-xs capitalize">dlelete</label>
                </td>
            </tr>
        </>
    );
};

export default MyOrder;