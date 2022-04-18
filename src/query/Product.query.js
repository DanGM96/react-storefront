import { Query, Field } from "@tilework/opus";
import { queryResponse } from "../util/query";

export class ProductQuery {
  constructor(id) {
    this.data = {};
    this.storeData(id);
  }

  productQuery(id) {
    return new Query("product")
      .addArgument("id", "String!", id)
      .addField("id")
      .addField("name")
      .addField("inStock")
      .addField("gallery", true)
      .addField("description")
      .addField(
        new Field("attributes", true)
          .addField("id")
          .addField("name")
          .addField("type")
          .addField(
            new Field("items", true).addField("displayValue").addField("value").addField("id")
          )
      )
      .addField(
        new Field("prices", true)
          .addField(new Field("currency").addField("label").addField("symbol"))
          .addField("amount")
      )
      .addField("brand");
  }

  storeData(id) {
    this.data = queryResponse(this.productQuery(id));
  }

  getData() {
    return this.data;
  }
}

export default ProductQuery;
