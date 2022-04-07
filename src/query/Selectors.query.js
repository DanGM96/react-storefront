import { Query, client, CombinedField } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");
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

  async queryResponse() {
    return await client.post(this.categoriesCurrenciesQuery());
  }

  setData() {
    this.data = this.queryResponse();
  }

  getData() {
    return this.data;
  }
}

export default new SelectorsQuery();
