// import React, { useState } from 'react';
// import styled from 'styled-components';

// // const FormStyle = styled.form`
// //   width: 100%;
// //   .form-group {
// //     width: 50%;
// //     margin-left: 29rem;
// //     margin-top: 5rem;
// //     margin-bottom: 5rem;
// //     background-color: #313538
    
// //   }
// //   label {
// //     font-size: 1.8rem;
// //   }
// //   input,
// //   textarea {
// //     width: 50%;
// //     font-size: 2rem;
// //     padding: 1.2rem;
// //     color: var(--gray-1);
// //     background-color: var(--deep-dark);
// //     outline: none;
// //     border: none;
// //     border-radius: 8px;
// //     margin-top: 1rem;
// //   }
// //   textarea {
// //     min-height: 250px;
// //     resize: vertical;
// //   }
// //   button[type='submit'] {
// //     background-color: var(--gray-1);
// //     color: var(--black);
// //     font-size: 2rem;
// //     display: inline-block;
// //     outline: none;
// //     border: none;
// //     padding: 1rem 4rem;
// //     border-radius: 8px;
// //     cursor: pointer;
// //   }
// // `;

// export default function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   return (
//     <>
//       <form>
//         <div className="form-group">
//           <label htmlFor="name">
//             Your Name
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">
//             Your Email
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">
//             Your message
//             <textarea
//               type="text"
//               id="message"
//               name="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

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
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

