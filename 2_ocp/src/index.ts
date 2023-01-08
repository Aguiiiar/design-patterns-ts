import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import MotorCyble from "./vehicles/Motorcycle";
const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Azul", 2012, 2.0, 4, 4);
  vehicle.startVehicle();
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new MotorCyble("Preto", 2021, 2.0);
}
