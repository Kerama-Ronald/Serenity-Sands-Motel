
import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="Contact">
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Send us a message</h2>
        <input
          {...register("userName", {
            required: "Username is Required...",
            minLength: {
              value: 3,
              message: "Username must be atleast 3 characters long...",
            },
            maxLength: {
              value: 30,
              message: "Username must be atmost 30 characters long...",
            },
          })}
          placeholder="Username"
        />
        <p>{errors.userName?.message}</p>
        <input
          {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>
        
        <label> 
          <textarea
            name="message"
            placeholder="Message"
          /><br></br>
          </label><br></br>
        <input type="Submit" />
      </form>
    </div>
  );
}

export default Contact;

