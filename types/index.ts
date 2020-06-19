export interface StockDatum {
  symbol: string;
  holdings: number;
}

export interface IexSymbol {
  symbol: string;
  exchange: string;
  name: string;
  date: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
  isEnabled: boolean;
  figi: string;
  cik: string;
}
