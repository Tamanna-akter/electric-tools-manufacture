import React from 'react';
import { toast } from 'react-toastify';

const ManageProductModal = ({ productDelete, setProductDelete, refetch }) => {
    const { _id } = productDelete;
    const handleProductDelete = id => {
        fetch(`https://thawing-atoll-26359.herokuapp.com/tools/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your product delete successfully');
                    setProductDelete(null);
                    refetch();
                }
            });
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-error">Are you sure delete your product ?</h3>

                    <div class="modal-action">
                        <button onClick={() => handleProductDelete(_id)} className="btn btn-error btn-xs capitalize">delete</button>
                        <label for="my-modal-6" class="btn  btn-xs capitalize">cencle</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageProductModal;