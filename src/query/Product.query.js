import { Query, Field } from "@tilework/opus";
import { queryResponse } from "../util/query";
import graphqlData from "../asset/data/graphql-data.json"; // for github-pages (static)

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
      .addField("category")
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

// for github-pages (static)
export class StaticProduct extends ProductQuery {
  productQuery(id) {
    const products = graphqlData.categories[0].products;
    let product = {};

    products.forEach((productsItem) => {
      if (productsItem.id === id) product = productsItem;
    });

    return { product };
  }

  storeData(id) {
    this.data = Promise.resolve(this.productQuery(id));
  }
}

function productFactory() {
  if (process.env.REACT_APP_ENV === "prod") {
    return StaticProduct; // static
  } else {
    return ProductQuery; // graphql
  }
}

export default productFactory();
