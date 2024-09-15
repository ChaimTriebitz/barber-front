import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '../../cmps';
import { HOME_HEADERS } from '../../data';



export const Appointments = () => {
   const [appointments, setAppointments] = useState([]);

   useEffect(() => {
      const fetchAppointments = async () => {
         try {
            const res = await axios.get('http://localhost:5000/api/appointments');
            setAppointments(res.data);
         } catch (err) {
            console.error(err);
         }
      };

      fetchAppointments();
   }, []);

   return (
      <div className='table-container'>
         <Table headers={HOME_HEADERS.appintments} rows={appointments} />
      </div>
   );
};

