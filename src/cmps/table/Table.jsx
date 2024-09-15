import React from 'react'
import { Thead, Tbody } from '../../cmps';

export const Table = ({ headers, rows }) => {
   console.log(headers);

   return (
      <table>
         <Thead headers={headers} />
         <Tbody headers={headers} rows={rows} />
      </table>
   )
}
