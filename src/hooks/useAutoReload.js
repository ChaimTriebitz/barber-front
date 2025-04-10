import { useEffect } from 'react'
import { useGlobalState } from './useGlobalState'

export function useAutoReload(ms) {
   const { Dispatch } = useGlobalState()
   useEffect(() => {
      const interval = setInterval(() => Dispatch.reload(), ms)
      return () => clearInterval(interval)
   }, [])
}