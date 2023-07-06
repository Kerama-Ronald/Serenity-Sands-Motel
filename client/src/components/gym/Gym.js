import React from "react";
import './gym.css';



const Gym = () => {
  const workInfoData = [
    {
      
      title: "Daily Payment",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      price: '10$',
    },
    {
      
      title: "Bi-Weekly",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      price: '50$',
    },
    {
      
      title: "Monthly",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      price: '65$',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">GYM PACKAGES</p>
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


