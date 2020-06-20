import { StockDatum, IexSymbol } from '@types';

export interface IRootState {
  token: string;
  loading: boolean;
}

export interface IUserState {
  user: {
    name: string;
    uid: string;
  };
}

export interface IStockState {
  stockList: StockDatum[];
  symbolList: IexSymbol[];
}
