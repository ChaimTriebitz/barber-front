import { createContext, useReducer } from 'react'
import { reducer, initialState,  Dispatcher } from '../state'
import { Entity } from '../classes'

export const Context = createContext()

export const ContextProvider = ({ children }) => {

   const [state, dispatch] = useReducer(reducer, initialState)

   const Dispatch = new Dispatcher(dispatch)
   Entity.Dispatch = Dispatch

   return (
      <Context.Provider value={{ ...state, Dispatch }}>
         {children}
      </Context.Provider>
   )
}
