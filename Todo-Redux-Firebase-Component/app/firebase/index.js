import firebase from 'firebase';

try {
  const firebaseConfig = {
      apiKey:        process.env.API_KEY,
      authDomain:    process.env.AUTH_DOMAIN,
      databaseURL:   process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET
  };

  firebase.initializeApp(firebaseConfig);
} catch(e) { }

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const firebaseRef    = firebase.database().ref();

export default firebase;
