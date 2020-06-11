import BaseClient from '../BaseClient';

export default class IexCloudClient extends BaseClient {
  static create(
    token: string,
  ) {
    return new IexCloudClient(token);
  }

  getCompanyInfomation(sc: string) {
    return this.axios.get(`stock/${sc}/company?token=${this.token}`);
  }
}
