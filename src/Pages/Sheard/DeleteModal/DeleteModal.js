import React from 'react';

const DeleteModal = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    return (
        <div>

            <input type="checkbox" id="DeleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="DeleteModal"
                            className="btn">{successButtonName}</label>
                        <label onClick={closeModal} htmlFor="DeleteModal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;