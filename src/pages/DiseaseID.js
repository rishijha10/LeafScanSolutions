import React from "react";
import Navigation from "../components/Navigation";
import leaf from "../assets/lettuce 1.jpg";
// import {fs} from 'fs';

const DiseaseID = () => {

  // axios({
  //     method: "POST",
  //     url: "https://classify.roboflow.com/fungal-disease-in-lettuce/1",
  //     params: {
//   //         api_key: "9RkWsIpavDstX3vfZsyN"
  //     },
  //     data: {leaf},
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //     }
  // })
  // .then(function(response) {
  //     console.log(response.data);
  // })
  // .catch(function(error) {
  //     console.log(error.message);
  // });

  // fetch("https://api.roboflow.com/rishi-9wjiw/fungal-disease-in-lettuce/1?api_key=9RkWsIpavDstX3vfZsyN", {
  //     method:"POST",
  //     // params:{
  //     //     API_KEY: "9RkWsIpavDstX3vfZsyN"
  //     // }
  //     // api_key:"rf_kpTpEarwFVbYTsKE6wDUdn1H5242",
  //     // withCredentials: true,
  //     // headers: {
  //     //     "X-Auth-Token": "9RkWsIpavDstX3vfZsyN",
  //     //     "Content-Type": "application/x-www-form-urlencoded"
  //     // },
  //     // data: leaf,
  //     headers: {
  //       "Content-type": "application/x-www-form-urlencoded"
  //     },
  //     body: "rf_kpTpEarwFVbYTsKE6wDUdn1H5242"
  // }).then(res=>res.json()).then(data=>console.log(data))


  /////////////////////////////////////////

  
  fetch(
    "https://api.roboflow.com/rishi-9wjiw/fungal-disease-in-lettuce/1?api_key=9RkWsIpavDstX3vfZsyN",
    {
      method: "POST",
      headers:{
        'Content-Type':"application/x-www-form-urlencoded"
      },
      body:leaf
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  ////////////////////////////////////////////////////////


// const axios = require("axios");
// // const fs = require("file-system");
// const FormData = require('form-data');

// const formData = new FormData();
// formData.append("name", leaf);
// // formData.append("file", fs.createReadStream(leaf));
// formData.append("split", "train");

// axios({
//     method: "POST",
//     url: "https://classify.roboflow.com/fungal-disease-in-lettuce/1",
//     params: {
//         api_key: "9RkWsIpavDstX3vfZsyN"
//     },
//     data: formData,
//     headers: formData.getHeaders()
// })
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error.message);
// });


/////////////////////////////
// fetch(
//     "https://api.roboflow.com/fungal-disease-in-lettuce/1?api_key=9RkWsIpavDstX3vfZsyN",
//     {
//       model_id: "raccoon-detector-1",​
//       model_type: "object-detection",​
//       api_key: "string",​
//       image: [​
//         {​
//           "type": "url",​
//           "value": "http://www.example-image-url.com"​
//         }​
//       ],​
//       confidence: 0.5,​
//       visualization_stroke_width: 1,​
//       visualize_predictions: false
//     }
//   )
//   .then((res) => res.json())
//   .then((data) => console.log(data));
  return (
    <div>
      <Navigation />
      {/* <form></form> */}
    </div>
  );
};

export default DiseaseID;
