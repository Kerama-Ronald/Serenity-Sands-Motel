import React from "react";
import './gym.css';

// import PickMeals from "../Assets/pick-meals-image.png";
// import ChooseMeals from "../Assets/choose-image.png";
// import DeliveryMeals from "../Assets/delivery-image.png";

const Gym = () => {
  const workInfoData = [
    {
      // image: PickMeals,
      title: "Daily Payment",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      price: '10$',
    },
    {
      // image: ChooseMeals,
      title: "Bi-Weekly",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      price: '50$',
    },
    {
      // image: DeliveryMeals,
      title: "Monthly",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      price: '65$',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <h1>{data.price}</h1>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gym;


// import React, { useState } from 'react';
// import './gym.css';
// import data from "./data"



// function Gym(){
//   const[model, setModel] = useState(false);
//   const[tempimgSrc, setTempImgSrc] = useState('');
//   const getImg = (imgSrc) =>{
    
//     setTempImgSrc(imgSrc);
//     setModel(true);
// }
//   return(
//     <div className='gym'>
//       <div className='top'>
//         <h1>Our Gym Packages</h1>
//         <p>SOMETHING HERE</p>
//       </div>
//       <div className='bottom'>
//         {data.map((item,index)=>{
//           return (
            
//             <div className='pics' key = {index} onClick ={()=> getImg(item.imgSrc)}>
//               <img src={item.imgSrc} style={{width:'100%'}} alt= 'Src'/>
//               <div className="img_text">
//                         <h2>{item.title}</h2>
//                             <p>{item.desc}</p>
//                         </div>
//             </div>
            
//           )
//         })}
//       </div>
      
//     </div>
    
//   )
// }


// export default Gym;