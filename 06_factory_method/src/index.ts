import Transport from "./transport/Transport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import BicycleTransport from "./transport/BicycleTransport";

let transport: Transport;

if (process.argv.includes("--uber")) {
  transport = new CarTransport();
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes("--eats")) {
  transport = new BicycleTransport();
} else {
  console.error("Selecione tipo de entrega");
}

if (transport) {
  transport.startTransport();
}
