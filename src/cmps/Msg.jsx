import { useEffect, useState } from 'react'

import { events } from './../functions'
import { svgsMap } from './../assets'

export const Msg = () => {

   const [msg, setMsg] = useState({})
   const [isHidden, setIsHidden] = useState(true)

   useEffect(() => {
      let removeEvent = events.listen('show-msg', (msg) => {
         setMsg(msg)
         setIsHidden(false)
         hideMsg(2500)
      })
      return () => {
         removeEvent()
      }
   }, [])

   const hideMsg = (delay) => {
      setTimeout(() => {
         setIsHidden(true)
      }, delay)
      setTimeout(() => {
         setMsg({})
      }, delay + 1000)
   }

   const { type = '', txt = '' } = msg

   return (
      <div className={`msg ${type ? 'show' : ''} ${isHidden ? 'hide' : ''} ${type}`}>
         <span>{svgsMap.msg[type]}</span>
         <h6>{txt || ''}</h6>
         <button className="close-btn" onClick={() => hideMsg(0)}>x</button>
      </div>
   )
}
