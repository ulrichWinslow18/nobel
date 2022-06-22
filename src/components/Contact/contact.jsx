import React,{formSubmit, useState} from 'react'
import "./contact.css"
import contact1 from "../images/special-4.png"
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const SERVICE_ID = "service_pm6meik";
const TEMPLATE_ID = "template_xnowfte";
const USER_ID = "hfyARxyXliUqMQ9YR";



const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
        e.target.reset()
      };



  return (
    <>
     <section className="contact" id="contact">
        <div className="container top">
            <div className="heading text-center">
                <h4>Contact</h4>
                <h1>Me Joindre</h1>
            </div>
            <div className="content d_flex">
                <div className="left">
                    <div className="box box-shadow">
                        <div className="img">
                            <img src={contact1} alt="" />
                        </div>
                        <div className="details">
                            <h1>KOUAME ULRICH NOBEL</h1>
                            <p>Je suis disponible pour un travail à plein temps . Connect with me via  and call in to my account.</p>
                            <br/>
                            <p>Phone: +225 01 40 08 11 18</p>
                            <p>Email: nobel250496@gmail.com</p> <br/>
                            <span> TROUVEZ MOI SUR  </span>
                            <div className="button f_flex">
                                <button className="btn-shadow">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button className="btn-shadow">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button className="btn-shadow">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right box-shadow">
                <Form onSubmit={handleOnSubmit}>
                       <div className="f_flex">
                          <div className="input row">
                              <span>NOM</span>
                              <Form.Field id="form-input-control-name"   control={Input}  name="full_name"  require />
                          </div>
                          <div className="input row">
                              <span>NUMERO</span>
                              <Form.Field id="form-input-control-phone"  control={Input}  name="phone"  require />
                           </div>
                       </div>
                       <div className="input ">
                              <span>EMAIL</span>
                              <Form.Field id="form-input-control-mail"  control={Input}  name="mail"  require />
                           </div>
                           <div className="input ">
                              <span>OBJET</span>
                              <Form.Field id="form-input-control-objet"  control={Input}  name="objet"  require />
                           </div>
                           <div className="input ">
                              <span>MESSAGE</span>
                              <Form.Field id="form-input-control-message" control={TextArea} cols='30' rows='10'  name='message' require />
                           </div>
                       <Button type="submit" className='btn-shadow'> ENVOIS MESSAGE <i className='fa fa-long-arrow-alt-down'></i></Button>

                    </Form>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Contact