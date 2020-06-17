import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { StockDatum } from '../../types';

export default class FirebaseClient {

  public setStockDatum(id: string, symbol: string, data: StockDatum) {
    firebase.firestore().collection(id).doc(symbol).set(data)
  }
}
