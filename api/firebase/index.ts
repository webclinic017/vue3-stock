import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { StockDatum } from '../../@types';

export default class FirebaseClient {


  public setStockDatum(id: string, data: StockDatum) {
    return firebase.firestore().collection(id).doc(data.symbol).set(data);
  }

  public getStockDatum(id: string) {
    return firebase.firestore().collection(id).get()
  }

  public deleteStockDatum(id: string, symbol: string) {
    return firebase.firestore().collection(id).doc(symbol).delete()
  }
}
