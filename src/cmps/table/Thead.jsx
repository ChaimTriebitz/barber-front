import React from 'react'

export const Thead = ({ headers }) => {
   return (
      <thead>
         <tr>
            {
               headers.map(header => <th key={header.name}>{header.name}</th>)
            }
         </tr>
      </thead>
   )
}
