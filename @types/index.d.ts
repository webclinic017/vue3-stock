import {
  IRootState,
  IUserState,
  IStockState,
} from './store';

import {
  IexSymbol,
  IexDividend,
  IexCompany,
} from './iex'

export interface StockDatum {
  symbol: string;
  holdings: number;
  dividend: IexDividend;
  company: IexCompany;
}

export {
  IRootState,
  IUserState,
  IStockState,
  IexSymbol,
  IexDividend,
  IexCompany,
}
