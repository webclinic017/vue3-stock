import {
  RootState,
  UserState,
  StockState,
} from './store';

import {
  IexSymbol,
  IexDividend,
  IexCompany,
  IexEarning,
} from './iex'

export interface StockDatum {
  symbol: string;
  holdings: number;
  dividend: IexDividend[];
  company: IexCompany;
}

export {
  RootState as IRootState,
  UserState as IUserState,
  StockState as IStockState,
  IexSymbol,
  IexDividend,
  IexCompany,
  IexEarning,
}
