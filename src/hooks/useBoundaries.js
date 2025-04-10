import { useState, useEffect, useRef } from 'react'
import { useDebounceCallback } from './useDebounceCallback'
import { useGlobalState } from './useGlobalState'

export const useBoundaries = () => {
   const ref = useRef(null);
   const { dialogs } = useGlobalState()
   const [position, setPosition] = useState({
      isNearLeft: false,
      isNearTop: false,
      isNearBottom: false,
      isNearRight: false,
   });

   const classNames = `${position.isNearTop ? 'top' : ''} 
                       ${position.isNearRight ? 'right' : ''} 
                       ${position.isNearBottom ? 'bottom' : ''} 
                       ${position.isNearLeft ? 'left' : ''}`;

   const updatePosition = (e) => {

      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();
         let parent = document.querySelector('.dialog-content') || ref.current.closest('.table-container') || document.querySelector('.App')

         const containerRect = parent.getBoundingClientRect()
         setPosition(p => ({
            ...p,
            isNearTop: rect.top - containerRect.top < 50,
            isNearRight: containerRect.right - rect.right < 50,
            isNearBottom: containerRect.bottom - rect.bottom < 50,
            isNearLeft: rect.left - containerRect.left < 50,
         }));
      }
      
   };

   const { debounce } = useDebounceCallback(updatePosition, 500)

   useEffect(() => {
      debounce()

      window.addEventListener('scroll', debounce, true)

      return () => {
         window.removeEventListener('scroll', debounce, true)
      }

   }, []);

   return { ref, position, classNames }
};
