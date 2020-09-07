import axios, { AxiosInstance } from 'axios';
import { iexCloudBaseUrl } from '@/constants';

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
      baseURL: iexCloudBaseUrl,
    });
    return instance;
  }
}
