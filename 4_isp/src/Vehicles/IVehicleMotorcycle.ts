import IVehicle from "./IVehicle";

export default interface IVehicleMotorCycle extends IVehicle {
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
