import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankNewRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verificar a pontual no rewards");
  }
  collectPayment(): void {
    console.log("Pagar com a pontuação do rewards");
  }
}
