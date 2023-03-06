import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC2KWJva76WvKO479StJ9O4blFdve5wdpw',
  authDomain: 'brightdata-scraper.firebaseapp.com',
  projectId: 'brightdata-scraper',
  storageBucket: 'brightdata-scraper.appspot.com',
  messagingSenderId: '836566304090',
  appId: '1:836566304090:web:3fcff9dbd23f31d721df63',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
