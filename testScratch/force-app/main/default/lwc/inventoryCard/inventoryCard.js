/**
 * @description       :
 * @author            : Vixit Bhardwaj - TA AtoS
 * @group             :
 * @last modified on  : 12-31-2020
 * @last modified by  : Vixit Bhardwaj - TA AtoS
 * Modifications Log
 * Ver   Date         Author                     Modification
 * 1.0   12-31-2020   Vixit Bhardwaj - TA AtoS   Initial Version
 **/
import { LightningElement, api } from "lwc";

export default class InventoryCard extends LightningElement {
  @api
  vehicle = [];

  handleClick() {
    console.log("clicked");
    const clickevt = new CustomEvent("cardselect", {
      detail: { vin: this.vehicle.vin }
    });
    this.dispatchEvent(clickevt);
  }
}
