import { firestore, initializeApp, performance } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/performance'
import 'firebase/storage'

initializeApp({
  apiKey: 'AIzaSyAatAe5UX8vK-k_Fay-YPN5PEKBV7EHzzg',
  appId: '1:308577319545:web:5a3fbd97f659ccf1',
  authDomain: 'wxvxwfwpguig.firebaseapp.com',
  databaseURL: 'https://wxvxwfwpguig.firebaseio.com',
  messagingSenderId: '308577319545',
  projectId: 'wxvxwfwpguig',
  storageBucket: ''
})

firestore()
  .enablePersistence({ synchronizeTabs: true })
  .catch(err => {
    console.error(err)
  })

performance()
