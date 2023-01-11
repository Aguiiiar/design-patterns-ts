import NubankCard from "./NubankCard";

export default class CreditCard extends NubankCard {
  validate(): void {
    console.log("Vericando limite...");
  }

  collectPayment(): void {
    console.log("");
  }
}
