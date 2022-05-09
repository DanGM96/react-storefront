import { Query, CombinedField } from "@tilework/opus";
import { queryResponse } from "../util/query";
import graphqlData from "../asset/data/graphql-data.json"; // for github-pages (static)

export class SelectorsQuery {
  constructor() {
    this.data = {};
    this.setData();
  }

  categoriesQuery() {
    return new Query("categories", true).addField("name");
  }

  currenciesQuery() {
    return new Query("currencies", true).addField("label").addField("symbol");
  }

  categoriesCurrenciesQuery() {
    return new CombinedField().add(this.categoriesQuery()).add(this.currenciesQuery());
  }

  setData() {
    this.data = queryResponse(this.categoriesCurrenciesQuery());
  }

  getData() {
    return this.data;
  }
}

// for github-pages (static)
export class StaticSelectors extends SelectorsQuery {
  categoresCurrenciesQuery() {
    const prices = graphqlData.categories[0].products[0].prices;
    const currencies = prices.map(({ currency }) => currency);
    const categories = graphqlData.categories.map(({ name }) => ({ name }));

    return { currencies, categories };
  }

  setData() {
    this.data = Promise.resolve(this.categoresCurrenciesQuery());
  }
}

export default new StaticSelectors();
// export default new SelectorsQuery(); // graphql
