import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle {
  startRoute(): void {
    this.getCarga();
    console.log("Iniciando delivery");
  }
  getCarga(): void {
    console.log("Já pegamos a encomenda");
  }
}
