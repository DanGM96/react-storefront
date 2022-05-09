import { Query, Field } from "@tilework/opus";
import { queryResponse } from "../util/query";
import graphqlData from "../asset/data/graphql-data.json"; // for github-pages (static)

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

// for github-pages (static)
export class StaticCategory extends CategoryQuery {
  mapProducts(categoryItem) {
    const products = categoryItem.products.map((productItem) => {
      const { description, attributes, ...product } = productItem;
      return product;
    });

    return { products };
  }

  categoryQuery(title) {
    let category = {};

    graphqlData.categories.forEach((categoryItem) => {
      if (categoryItem.name === title) category = this.mapProducts(categoryItem);
    });

    return { category };
  }

  storeData(title) {
    this.data = Promise.resolve(this.categoryQuery(title));
  }
}

function categoryFactory() {
  if (process.env.REACT_APP_ENV === "prod") {
    return StaticCategory; // static
  } else {
    return CategoryQuery; // graphql
  }
}

export default categoryFactory();
