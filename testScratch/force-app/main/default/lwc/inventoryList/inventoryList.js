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
import { LightningElement, track } from "lwc";

export default class Inventory extends LightningElement {
  @track
  vehicles = [
    {
      status: "Available",
      statusBadge: "slds-theme_success",
      imageUrl:
        "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_white.jpg",
      title: "Model One",
      package: "Performance",
      vin: "11111"
    },
    {
      status: "Sold",
      statusBadge: "slds-theme_error",
      imageUrl:
        "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_black.jpg",
      title: "Model X",
      package: "Performance",
      vin: "11112"
    },
    {
      status: "Available",
      statusBadge: "slds-theme_success",
      imageUrl:
        "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_white.jpg",
      title: "Model One",
      package: "Performance",
      vin: "11113"
    },
    {
      status: "Available",
      statusBadge: "slds-theme_success",
      imageUrl: "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_red.jpg",
      title: "Model X",
      package: "Performance",
      vin: "11114"
    },
    {
      status: "Available",
      statusBadge: "slds-theme_success",
      imageUrl:
        "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_black.jpg",
      title: "Model One",
      package: "Performance",
      vin: "11115"
    },
    {
      status: "Sold",
      statusBadge: "slds-theme_error",
      imageUrl:
        "http://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_white.jpg",
      title: "Model One",
      package: "Performance",
      vin: "11116"
    }
  ];

  handleSelect(event) {
    console.log(event);
    this.vehicles = this.vehicles.map((vehicle) => {
      if (event.detail.vin) {
        vehicle.classStyle =
          vehicle.vin === event.detail.vin ? "pointernotallowed" : "mute";
      } else {
        vehicle.classStyle = "pointer";
      }
      return vehicle;
    });
    console.log(this.vehicles);
  }
}
