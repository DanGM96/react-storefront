import { Query, client, Field } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");
export class CategoryQuery {
  constructor(title) {
    this.title = title;
    this.category = {};
    this.storeData();
  }

  categoryQuery() {
    return new Query("category")
      .addArgument("input", "CategoryInput", { title: this.title })
      .addField(
        new Field("products", true)
          .addField("id")
          .addField("name")
          .addField("inStock")
          .addField("gallery", true)
          .addField(
            new Field("prices", true)
              .addField(new Field("currency").addField("symbol"))
              .addField("amount")
          )
          .addField("brand")
      );
  }

  queryResponse() {
    return client.post(this.categoryQuery());
  }

  storeData() {
    this.queryResponse().then(({ category }) => {
      this.category = category;
    });
  }

  getCategories() {
    return this.category;
  }
}

export default CategoryQuery(title);
