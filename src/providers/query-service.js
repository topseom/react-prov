import * as firebase from 'firebase';

export const anfire = ()=>{
    return new Promise((resolve,reject)=>{
        firebase.database().ref().child('test').once('value').then(snap=>{
            resolve(snap.val());
        });
    })
    
}