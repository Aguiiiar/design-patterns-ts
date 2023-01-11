import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCarga();
    console.log("Iniciando rota");
  }
  getCarga(): void {
    console.log("Já pegamos a encomenda");
  }
}
