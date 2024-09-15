import React, { useState } from 'react';
import axios from 'axios';

export const Form = () => {
   const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      datetime: '',
      barber: '',
      service: '',
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(typeof e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post('http://localhost:5000/api/appointments', formData);
         console.log('Appointment booked:', res.data);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <form className='form' onSubmit={handleSubmit}>
         <input name="firstname" placeholder="First Name" onChange={handleChange} />
         <input name="lastname" placeholder="last Name" onChange={handleChange} />
         <input name="datetime" type="datetime-local" onChange={handleChange} />
         <input name="barber" placeholder="Barber" onChange={handleChange} />
         <input name="service" placeholder="Service" onChange={handleChange} />
         <button type="submit">Book Appointment</button>
      </form>
   );
};

