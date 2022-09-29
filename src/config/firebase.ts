import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AuthDomain,
  databaseURL: process.env.REACT_APP_ProjectId,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MeasurementId,
  appId: process.env.REACT_APP_AppId,
};
console.log(config)

const app=firebase.initializeApp(config);
const auth = getAuth(app);
export default auth;