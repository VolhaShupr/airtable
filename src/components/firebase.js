import firebase from 'firebase';
import {dbConfig}  from '../config/config'

firebase.initializeApp(dbConfig);

export default firebase;
export const database = firebase.database();