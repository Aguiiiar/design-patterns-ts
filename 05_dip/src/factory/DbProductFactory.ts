import { Database } from "../model/Database";
import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  private static type: Database = Database.MONGODB;

  public static create(): IDbProduct | string {
    if (this.type === Database.MYSQL) {
      return new MySQLProduct();
    } else if (this.type === Database.MONGODB) {
      return new MongoDBProduct();
    }

    return "Erro no banco de dados";
  }
}
