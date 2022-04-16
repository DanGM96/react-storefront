import { Query, CombinedField } from "@tilework/opus";
import { queryResponse } from "../util/query";

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

export default new SelectorsQuery();
