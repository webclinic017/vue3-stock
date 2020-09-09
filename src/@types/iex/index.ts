
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

export interface IexDividend {
  exDate: string;
  paymentDate: string;
  recordDate: string;
  declaredDate: string;
  amount: string;
  flag: string;
  currency: string;
  description: string;
  frequency: string;
  date: string;
}

export interface IexCompany {
  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  securityName: string;
  issueType: string;
  sector: string;
  primarySicCode: number;
  employees: number;
  tags: string[];
  address: string;
  address2: string | null;
  state: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
}

export interface IexEarning {
  actualEPS: number;
  consensusEPS: number;
  announceTime: string;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
}

export interface IexPreviousPrice {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  uOpen: number;
  uClose: number;
  uHigh: number;
  uLow: number;
  uVolume: number;
  change: number;
  changePercent: number;
  changeOverTime: number;
  symbol: string;
}
