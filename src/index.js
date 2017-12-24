import initApp,{ getSite } from './providers/site-service';
import { anfire } from './providers/query-service';
import * as firebase from 'firebase';
import React from 'react';

firebase.initializeApp({
    apiKey: "AIzaSyCYIxQwZTTbTjbY2Nmzom0DS_gLec3K6rs",
    authDomain: "main-f50e4.firebaseapp.com",
    databaseURL: "https://main-f50e4.firebaseio.com",
    projectId: "main-f50e4",
    storageBucket: "main-f50e4.appspot.com",
    messagingSenderId: "229358120035"
});


class Fancy extends React.Component {
  render() {
    return (
      <div>This is so Fancy!</div>
    );
  }
}

export { initApp,getSite,anfire };
export default Fancy;