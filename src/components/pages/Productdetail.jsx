import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  let { quntaty } = useParams();

  console.log(quntaty, "product detail,");

  let products = [
    {

      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 1,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 2,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 3,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 4,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 5,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 6,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 7,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 8,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 9,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 10,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 11,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 12,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 13,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 14,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 15,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 16,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 17,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 18,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 19,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 20,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 21,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 22,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 23,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 24,
    },
   
    {
      Image: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      productName: "samsung",
      price: 20000,
      desc: "this is most viral product",
      color: "black",
      quntaty: 25,
    },
  
  ];


  let result = products.filter((val) => val.quntaty == quntaty);
  console.log(result);

  return (
    // <div>
    //   <h1>{result[0].Image}</h1>
    //   <h1>{result[0].productName}</h1>
    //   <h1>{result[0].desc}</h1>
    //   <h1>{result[0].color}</h1>
    // </div>
    <div class="card">
                  <img
                    class={result[0].Image}
                    style={{ height: 100 }}
                    src=""
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{result[0].productName}</h5>
                    <p class="card-text">{result[0].desc}</p>
                    <div style={{display:"flex", marginTop:10, marginBottom:10}}>
                    <h6 style={{paddingRight:20 }}>color:-{result[0].color}</h6>
                    <div>
                        <h6>quntaty:-{result[0].quntaty}</h6>
                    </div>
                    </div>
                    <div style={{display:"flex", }}>
                    <Link to={`/${result[0].quntaty}`} href="#"  class="btn btn-primary">
                      vivew detail
                    </Link>
                     <div style={{paddingLeft:10, alignItems:"center"
                     }}>
                     <h5>price :-{result[0].price}</h5>
                     </div>
                    </div>
                  </div>
                </div>
  );
};

export default Productdetail;
