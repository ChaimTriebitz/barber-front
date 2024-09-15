import React, { useState } from 'react';
import axios from 'axios';

export const Form = () => {
   const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      date: '',
      time: '',
      barber: '',
      service: '',
   });

   console.log(formData.date);


   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <form onSubmit={handleSubmit}>
         <input name="firstname" placeholder="First Name" onChange={handleChange} />
         <input name="lastname" placeholder="last Name" onChange={handleChange} />
         <input type="date" name="date" onChange={handleChange} />
         <input type="time" name="time" onChange={handleChange} />
         <input name="barber" placeholder="Barber" onChange={handleChange} />
         <input name="service" placeholder="Service" onChange={handleChange} />
         <button type="submit">Book Appointment</button>
      </form>
   );
};

