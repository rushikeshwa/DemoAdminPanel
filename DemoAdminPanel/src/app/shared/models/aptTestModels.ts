export interface Student {
  "id": number,
  "name": string,
  "phone": string,
  "age": string
}
export interface OrderBook {
  BuyOrders: Array<{
    OrderType: string,
    Price: number,
    Volume: number
  }>;
  CreatedTimestampUtc: string;
  SellOrders: Array<{
    OrderType: string,
    Price: number,
    Volume: number
  }>;
}


interface RatesObject {
  CurrencyCodeA: string,
  CurrencyCodeB: string,
  Rate: number
}

export interface Rates extends Array<RatesObject> { }

export interface LatestPricesObject {
  status: string;
  prices: {
    btc: {
      bid: string,
      ask: string,
      last: string
    },
    ltc: {
      bid: string,
      ask: string,
      last: string
    },
    doge: {
      bid: string,
      ask: string,
      last: string
    }
  },
}

// export interface LatestPrices extends LatestPricesObject{}


export class MyDataType {
  public id: number;
  public data: string;
}

export interface Laptop {
  Dell: Array<{
    brand: string;
    hardDisk: string;
    color: string;
    screenSize: number;
    price: number;
  }>;
  HP: Array<{
    brand: string;
    hardDisk: string;
    color: string;
    screenSize: number;
    price: number;
  }>;
  NotAvailable: Array<{
    brand: string;
    hardDisk: string;
    color: string;
    screenSize: number;
    price: number;
  }>;
}