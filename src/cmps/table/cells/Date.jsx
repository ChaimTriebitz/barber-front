import React from 'react'

export const Date = ({ header, row }) => {
   return (
      <div>{row[header.internal_name]}</div>
   )
}
