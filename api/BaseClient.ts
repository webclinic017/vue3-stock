import axios, { AxiosInstance } from 'axios';

export default class BaseClient {

  protected _token: string;
  protected _axios: AxiosInstance;

  constructor(
    token: string
  ) {
    this._token = token;
    this._axios = this.createAxios();
  }

  static create(token: string) {
    return new BaseClient(token);
  }

  private createAxios() {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_IEX_API_BASE_URL,
    })
    return instance;
  }
}
