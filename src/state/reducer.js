import { ACTIONS } from '../state'

export const reducer = (state = {}, action = {}) => {
   const { entity, payload, type } = action
   const { reloadCount } = state
   switch (type) {

      case ACTIONS.SET:
         return { ...state, [entity]: payload, }

      case ACTIONS.RELOAD_DATA:
         return { ...state, reloadCount: reloadCount + 1 }

      case ACTIONS.PUSH:
         return { ...state, [entity]: [...state[entity], ...payload] }

      case ACTIONS.POP:
         return { ...state, [entity]: state[entity]?.filter((item) => !payload.includes(item)) }

      default:
         return state
   }
}

