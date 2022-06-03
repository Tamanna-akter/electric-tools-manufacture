import React from 'react';

const ManageAllOrder = ({ index, order }) => {
    const { name, email, address, phone, productName, orderQuantity } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td><button className="btn btn-xs capitalize">delete</button></td>
        </tr>
    );
};

export default ManageAllOrder;