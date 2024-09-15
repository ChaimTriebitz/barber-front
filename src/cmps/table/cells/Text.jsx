import React from 'react'

export const Text = ({ header, row }) => {
   console.log(header, row);
   
   return (
      <p>{row[header.internal_name]}</p>
   )
}
