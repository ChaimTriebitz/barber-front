import { useSearchParams } from 'react-router-dom'

export const useGetSearchParams = (params = []) => {
   const [searchParams] = useSearchParams()
   return params.map(param => searchParams.get(param)) || []
}
