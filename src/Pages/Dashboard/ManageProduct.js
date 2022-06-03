import React from 'react';

const ManageProduct = ({ index, product, setProductDelete }) => {
    const { name, description, minimumOrder, availableQuantity, price } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>{minimumOrder}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setProductDelete(product)} htmlFor="my-modal-6" class="btn btn-error btn-xs capitalize">delete</label>
            </td>
        </tr>
    );
};

export default ManageProduct;