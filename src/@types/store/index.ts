import { StockDatum, IexSymbol } from '@/@types';

export interface RootState {
  token: string;
  loading: boolean;
}

export interface UserState {
  user: {
    name: string;
    uid: string;
  };
}

export interface StockState {
  stockList: StockDatum[];
  symbolList: IexSymbol[];
}
