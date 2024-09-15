import React from 'react'
import { Cells } from '..'

export const Tbody = ({ headers, rows }) => {
   return (
      <tbody>
         {
            rows.map((row) => (
               <tr key={row._id}>
                  {
                     headers.map((header) => <td key={header.name}><Cells header={header} row={row} /></td>)
                  }
                  {/* <td>{row.customerName}</td>
                  <td>{new Date(row.date).toLocaleDateString()}</td>
                  <td>{row.time}</td>
                  <td>{row.barber}</td>
                  <td>{row.service}</td> */}
               </tr>
            ))
         }
         {
            !rows.length &&
            <tr>
               <td
                  className='no-match'
                  colSpan={100}
               >
                  No matches found
               </td>
            </tr>
         }
      </tbody>
   )
}
