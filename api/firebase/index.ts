import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { StockDatum } from '../../@types';

export default class FirebaseClient {


  public setStockDatum(id: string, symbol: string, data: StockDatum) {
    return firebase.firestore().collection(id).doc(symbol).set(data);
  }

  public getStockDatum(id: string) {
    return firebase.firestore().collection(id).get()
  }
}
