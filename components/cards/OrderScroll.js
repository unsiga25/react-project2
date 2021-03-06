import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";


export async function getStaticProps() {
  const res = await fetch ('http://localhost:3000/api/hello')
  const posts = await res.json()
}

const style = {
  height: 90,
  border: "none",
  margin: 6,
  padding: 8
  
};



class OrderScroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };


  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
    }, 200);
  };

  

  render() {
    return (
      <div>
       <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={300}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div className="border-none py-3" style={style} key={index}>
             <div
          className="
            list-group-item
            d-flex
            justify-content-between
            cursor-pointer

            list-group-item
          "
        >
          <div className="d-flex">
            <div style={{paddingLeft: '0', margin : '10px'}}>
              <span>FirstName LastName</span>
              <p>Number Order #1510031<br /></p>
            </div>
          </div>
          <div>
            <h6>$19.89</h6>  div - #{index}
          </div>
        </div>
  
            </div>
          ))}
        </InfiniteScroll>
        </div>
        

      
    );
  }
}

export default OrderScroll;
