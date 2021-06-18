import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from 'react-bootstrap'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'
import Image from 'next/image'

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
        <>
    <div className="">
        <h6><a className=" cursor-pointer font-primary view overlay" onClick={onOpenModal}>View all</a></h6>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="pt-4 text-center">All Favourite Korean Foods</h2>
        <div className='row d-flex justify-content-around'>
          <div className=" col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/sports" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3 m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>
          <div className='row'>
          <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>
          <div className='row'>
          <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/foods" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-md-6 col-12 col-xl-3">
            <div className="card m-3"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>


       <div className='row d-flex justify-content-center m-5'>
       <button className="btn-primary col-6 radius-30">Add new food</button>
       </div>
      </Modal>
    </div>
      </>
  );
};

export default App;
