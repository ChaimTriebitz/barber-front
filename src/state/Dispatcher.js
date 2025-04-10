import { ACTIONS,ENTITIES } from '.';

/**
 * @typedef {keyof typeof ENTITIES.dialog} dialog
 * @typedef {keyof typeof ENTITIES} Entity
 * @class Dispatcher
 */

export class Dispatcher {
   
   /** @type {Record<Entity, (payload: any) => void>} */ set;
   /** @type {Record<Entity, (payload: Array) => void>} */ push;
   /** @type {Record<Entity, (payload: Array) => void>} */ pop;

   constructor(dispatch) {
      this.dispatch = dispatch;

      this.set = new Proxy({}, {
         get: (_, entity) => (payload) => this.dispatch({ type: ACTIONS.SET, entity, payload })
      });

      this.push = new Proxy({}, {
         get: (_, entity) => (payload) => this.dispatch({ type: ACTIONS.PUSH, entity, payload })
      });

      this.pop = new Proxy({}, {
         get: (_, entity) => (payload) => this.dispatch({ type: ACTIONS.POP, entity, payload })
      });
   }

   reload() {
      this.dispatch({ type: ACTIONS.RELOAD_DATA });
   }
   turnOnLoader() {
      this.dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: true });
   }
   turnOffLoader() {
      this.dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: false });
   }
}

