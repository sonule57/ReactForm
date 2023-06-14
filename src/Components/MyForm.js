// import React from 'react';
import React, { useState } from 'react';
import classes from './MyFrom.module.css';

const MyForm = () => {

  const [firstName, setFirstName] = useState();
  const [fname, setfname] = useState();

  const [lastName, setLastName] = useState();
  const [lname, setlname] = useState();

  const [email, setEmail] = useState();
  const [email1, setemail] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    setfname(firstName)
    setlname(lastName)
    setemail(email)
  }
  return (
    <div className={`d-flex ${classes.div1}`}>
      <div className={`mt-5 ${classes.div2}`}>
        <form onSubmit={handleForm} className={`mt-2 text-center ${classes.form}`}>
          <legend className={`mt-3 ${classes.heading}`}>Create Account</legend>

          <label className={`${classes.head2}`}>Enter First Name:</label>
          <input type='text' onChange={(e) => setFirstName(e.target.value)} className={`${classes.head1}`} /> <br /><br />

          <label className={`${classes.head2}`}>Enter Last Nmae:</label>
          <input type='text' onChange={(e) => setLastName(e.target.value)} className={`${classes.head1}`}/><br /><br />

          <label className={`${classes.head2}`}>Enter Your Email:</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} className={`${classes.head1}`} /><br /><br />

          <button type='submit' className={`${classes.button}`}>Submit</button>
        </form>
      </div>
      <div className={`${classes.div3}`}>
      <legend className={`mt-3 ${classes.heading2}`}>Check Account
        <h1>{fname}</h1>
        <h1>{lname}</h1>
        <h1>{email1}</h1>
        </legend>
      </div>


    </div>
  )
}

export default MyForm;