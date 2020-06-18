import BaseClient from '../BaseClient';

export default class IexCloudClient extends BaseClient {
  static create(
    token: string,
  ) {
    return new IexCloudClient(token);
  }

  getCompanyInfomation(symbol: string) {
    return this.axios.get(`stock/${symbol}/company?token=${this.token}`);
  }

  getStockLogo(symbol: string) {
    return this.axios.get(`stock/${symbol}/logo?token=${this.token}`)
  }
}
