import { useEffect, useCallback } from 'react'

export function useKeyPress(ctrlKey = true, key='', callback=()=>{}) {

   const handleKeyPress = useCallback((e) => {
      // e.preventDefault()
      if (ctrlKey === e.ctrlKey && e.key === key) callback()
   }, [ctrlKey, key, callback])

   useEffect(() => {
      window.addEventListener('keydown', handleKeyPress)

      return () => {
         window.removeEventListener('keydown', handleKeyPress)
      }
   }, [handleKeyPress])
}
