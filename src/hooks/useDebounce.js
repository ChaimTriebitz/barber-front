import { useEffect } from "react"
import { useTimeout } from "./index"

export function useDebounce(callback, dependencies, delay = 500) {
   const { reset, clear } = useTimeout(callback, delay)
   useEffect(reset, [...dependencies, reset])
   useEffect(clear, []) // eslint-disable-line
}