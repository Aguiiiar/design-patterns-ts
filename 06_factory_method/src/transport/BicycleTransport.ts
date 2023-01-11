import Transport from "./Transport";
import Bicycle from "./vehicles/Bicycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BicycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bicycle();
  }
}
