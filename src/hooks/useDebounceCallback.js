import { useRef } from "react";

export const useDebounceCallback = (callback, delay = 1000) => {
   const timeoutRef = useRef(null);

   const debounce = (...args) => {

      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
         callback(...args);
      }, delay);
   };
   return {
      debounce
   }

};
