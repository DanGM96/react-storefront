import { Query, client, Field } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");
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
        .addField(
          new Field("prices", true)
            .addField(new Field("currency").addField("label").addField("symbol"))
            .addField("amount")
        )
        .addField("brand")
    );
  }

  async queryResponse(title) {
    return await client.post(this.categoryQuery(title));
  }

  storeData(title) {
    this.data = this.queryResponse(title);
  }

  getData() {
    return this.data;
  }
}

export default CategoryQuery;
