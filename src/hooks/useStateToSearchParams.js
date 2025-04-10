import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export const useStateToSearchParams = (key, state) => {

   const [searchParams, setSearchParams] = useSearchParams()

   useEffect(() => {
      if (state === null) return
      searchParams.set(key, decodeURIComponent(state))
      setSearchParams(searchParams)
   }, [state])
}
