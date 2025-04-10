import { useRef } from 'react'
import { useGlobalState } from '.'

export const useDndRows = (rows = [], entity) => {
   const { Dispatch } = useGlobalState()

   const startIdx = useRef(null)
   const endIdx = useRef(null)
   const rowsRef = useRef(null)
   const startEl = useRef(null)
   const payloadRef = useRef(null)

   const handleDStart = (e) => {
      rowsRef.current = rows
      startEl.current = e.target.closest('.dnd-item')
      startEl.current.classList.add('dragging-item')
      startIdx.current = +startEl.current.dataset.index
   }

   const handleDOver = (e) => {
      e.preventDefault()
      if (!startEl.current) return
      const rowEl = e.target.closest('.dnd-item')
      if (endIdx.current === +rowEl.dataset.index) return
      endIdx.current = +rowEl.dataset.index
      const newArray = [...rowsRef.current]
      const [item] = newArray.splice(startIdx.current, 1)
      newArray.splice(endIdx.current, 0, item)
      Dispatch.setPerPage[entity](newArray)
      payloadRef.current = newArray
   }

   const handleDEnd = () => {
      startEl.current.classList.remove('dragging-item')
      if (startIdx.current === endIdx.current) return
   }

   return {
      handleDStart,
      handleDOver,
      handleDEnd,
      // handleChange
   }
}
