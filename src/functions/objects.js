


function getChangedProperties(prev, changed) {
   const p = { ...prev }
   const c = { ...changed }
   const changedProperties = {}

   function isNullOrEmpty(value) {
      return (
         value === null ||
         value === undefined ||
         (typeof value === 'string' && value.trim() === '') ||
         (Array.isArray(value) && value.length === 0) ||
         (typeof value === 'object' && Object.keys(value).length === 0)
      )
   }

   function findChangedProperties(prevObj, changedObj, path = '') {
      for (let key in prevObj) {
         if (prevObj.hasOwnProperty(key)) {
            const newPath = path ? `${path}.${key}` : key
            const prevValue = prevObj[key]
            const changedValue = changedObj[key]

            const trimmedPrevValue = typeof prevValue === 'string' ? prevValue.trim() : prevValue
            const trimmedChangedValue = typeof changedValue === 'string' ? changedValue.trim() : changedValue

            if (
               (isNullOrEmpty(trimmedPrevValue) && isNullOrEmpty(trimmedChangedValue)) ||
               (typeof trimmedPrevValue === 'object' &&
                  typeof trimmedChangedValue === 'object' &&
                  isNullOrEmpty(trimmedPrevValue) &&
                  isNullOrEmpty(trimmedChangedValue))
            ) {
            } else if (typeof trimmedPrevValue === 'object' && typeof trimmedChangedValue === 'object') {
               if (Array.isArray(trimmedPrevValue) || Array.isArray(trimmedChangedValue)) {
                  if (trimmedPrevValue !== trimmedChangedValue) {
                     changedProperties[newPath] = changedValue
                  }
               } else {
                  findChangedProperties(trimmedPrevValue, trimmedChangedValue, newPath)
               }
            } else if (trimmedPrevValue !== trimmedChangedValue) {
               changedProperties[newPath] = changedValue
            }
         }
      }
      for (let key in changedObj) {
         if (changedObj.hasOwnProperty(key) && !prevObj.hasOwnProperty(key)) {
            if (typeof changedObj[key] === 'string' && changedObj[key].trim() !== '') changedProperties[key] = changedObj[key]
         }
      }
   }
   findChangedProperties(p, c)
   return changedProperties
}