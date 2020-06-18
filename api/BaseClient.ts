import axios, { AxiosInstance } from 'axios';

export default class BaseClient {
  protected token: string;
  protected axios: AxiosInstance;

  constructor(
    token: string,
  ) {
    this.token = token;
    this.axios = this.createAxios();
  }

  static create(token: string) {
    return new BaseClient(token);
  }

  private createAxios() {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_IEX_API_BASE_URL,
    });
    return instance;
  }
}
