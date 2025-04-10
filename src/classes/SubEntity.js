import { Entity } from '.';

/**
 * @class SubEntity
 */

export class SubEntity extends Entity {
   /**
    * Create a Entity .
    * @param {Object} tableRow - The TableRow data.
    * 
    */
   constructor(object, idx) {
      super(object, 'row', idx)
      this.isSomthing = true
   }

   example() {
      this.isSomthing = !this.isSomthing
      TableRow.Dispatch.updateArrayPerPage.rows(this)
   }
}
