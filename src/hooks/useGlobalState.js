import { useContext } from 'react'
import { Context } from '../state'

/**
 * @typedef  {Object}  initialState
 * @property {number}  reloadCount
 * @property {boolean} isDataLoading
 * @property {Array}   selectedRowsIds
 * @property {import('../state').Dispatcher}   Dispatch
 * @property {import('../classes').TableRow}  selectedRow
 * @typedef  {initialState} state
 * @returns  {state}
*/

export const useGlobalState = () => {
   const context = useContext(Context);
   return context;
};

