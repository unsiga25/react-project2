import { useState } from "react";
import { Modal } from "react-responsive-modal";

const OrderStatus = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="card col-12">
      <a
        className="cursor-pointer font-color text-decoration-none"
        onClick={onOpenModal}
      >
        <h4 className="pt-2">Order Status:</h4>
        <div className="progress text-center mb-3">
          <div
            className="progress-bar bg-color"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            75%
          </div>
        </div>
        <div className="text-center">
          <h5>On Delivery</h5>
          <p>Sat, 23 Jul 2020, 01:24 PM</p>
        </div>
      </a>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="progress text-center mb-3">
                <div
                  className="progress-bar bg-color"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-8 d-flex">
              <i className="bx bx-check bx-md"></i>
              <h4>Order Received from EDSA Branch</h4>
            </div>
            <div className="col-8 d-flex">
              <i className="bx bx-check bx-md"></i>
              <h4>Order Prepared for rider pickup</h4>
            </div>
            <div className="col-8 d-flex">
            <i className='bx bx-loader-circle bx-md' ></i>
              <h4>Order being delivered to you</h4>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderStatus;
