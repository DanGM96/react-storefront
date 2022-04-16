import { Query, Field } from "@tilework/opus";
import { queryResponse } from "../util/query";

export class CategoryQuery {
  constructor(title) {
    this.data = {};
    this.storeData(title);
  }

  categoryQuery(title) {
    return new Query("category").addArgument("input", "CategoryInput", { title: title }).addField(
      new Field("products", true)
        .addField("id")
        .addField("name")
        .addField("inStock")
        .addField("gallery", true)
        .addField("category")
        .addField(
          new Field("prices", true)
            .addField(new Field("currency").addField("label").addField("symbol"))
            .addField("amount")
        )
        .addField("brand")
    );
  }

  storeData(title) {
    this.data = queryResponse(this.categoryQuery(title));
  }

  getData() {
    return this.data;
  }
}

export default CategoryQuery;
