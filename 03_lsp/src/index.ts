import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankNewRewards from "./NubankNewRewards";

// const card = new CreditCard();
// const card = new DebitCard();
const card = new NubankNewRewards();
card.validate();
card.collectPayment();
