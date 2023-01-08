import DbProductFactory from "../factory/DbProductFactory";
import MySQLProduct from "../model/MySQLProduct";

export default class Payment {
  pay(productId: number): void {
    const dbProduct = DbProductFactory.create();
    const product = dbProduct.getProductById(productId);

    console.log(product);
  }
}
