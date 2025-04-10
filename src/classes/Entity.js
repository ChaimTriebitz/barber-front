import { post } from '../controllers'

/**
 * @class Entity
 */

export class Entity {

   /**
   * Create a new Entity instance.
   * @param {Object} payload - The payload to create an entity with.
   * @param {string} type - The Entity type.
   */

   static async create(url, payload, type) {
      const res = await post.create(url, payload)
      Entity.Dispatch.reload()
      return res
   }

   static Dispatch

   constructor(object, type, idx) {
      Object.assign(this, object)
      this.type = type
      this.idx = idx
   }
}