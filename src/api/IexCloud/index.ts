import { AxiosResponse } from 'axios';
import { IexDividend, IexCompany, IexSymbol, IexEarning } from '@/@types';
import { IexPreviousPrice } from '@/@types/iex';
import BaseClient from '../BaseClient';

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

  getEarnings(symbol: string, period: 'annual' | 'quarter' = 'quarter'): Promise<AxiosResponse<IexEarning[]>> {
    return this.axios.get(`stock/${symbol}/earnings/`, {
      params: {
        period
      }
    })
  }

  getPreviousPrive(symbol: string): Promise<AxiosResponse<IexPreviousPrice>> {
    return this.axios.get(`stock/${symbol}/previous?token=${this.token}`)
  }
}
