import BaseClient from '../BaseClient';
import { AxiosResponse } from 'axios';
import { IexDividend, IexCompany, IexSymbol } from '@types';

export default class IexCloudClient extends BaseClient {
  static create(
    token: string,
  ) {
    return new IexCloudClient(token);
  }

  getCompanyInfomation(symbol: string): Promise<AxiosResponse<IexCompany>> {
    return this.axios.get(`stock/${symbol}/company?token=${this.token}`);
  }

  getStockLogo(symbol: string): Promise<AxiosResponse<{ url: string }>> {
    return this.axios.get(`stock/${symbol}/logo?token=${this.token}`)
  }

  getSymbolList(): Promise<AxiosResponse<IexSymbol[]>> {
    return this.axios.get(`ref-data/symbols?token=${this.token}`)
  }

  getDividends(symbol: string): Promise<AxiosResponse<IexDividend[]>> {
    return this.axios.get(`stock/${symbol}/dividends/1y?token=${this.token}`)
  }
}
