import Row from 'react-bootstrap/Dropdown'
import OrderScroll from '../cards/OrderScroll'
import Dropdown from 'react-bootstrap/Dropdown'

const OrderHistory = () => {
    return (
      <div className="card p-5 p-md-3">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Order history</h4>
        <div className="d-flex align-items-center">
          <h5 className="p-2">Order Locations</h5>
          <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-Basic" className="bg-color toggle-btn">
          .
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Places</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Caloocan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Malabon</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Navotas</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Quezon City</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Marikina</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Pasig</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Taguig</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Makati</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Manila</Dropdown.Item>
          <Dropdown.Item href="#/action-2">San Juan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pasay</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Parañaque</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Las Piñas</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Muntinlupa</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
        </div>
      </div>
      <div className="d-flex">
        <p>$1.337<span>| This month</span></p>
        
      </div>
      <OrderScroll/>
      <Row className="d-flex justify-content-center mt-2">
        <p className="m-2">See Full history</p>
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-Basic" className="navbar-toggle bg-color toggle-history">

        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Previous Year</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Previous Month</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Row>
    
    </div>
    );
  };
  
  export default OrderHistory;
  