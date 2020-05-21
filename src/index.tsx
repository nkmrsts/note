import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './firebase/initializeApp'
import './index.css'
import { register } from './serviceWorker'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register({
  onUpdate(registration) {
    if (!registration.waiting) return

    const listener = (
      event: Event & {
        target: (Partial<ServiceWorker> & EventTarget) | null
      }
    ) => {
      if (!event.target || event.target.state !== 'activated') return
      window.location.reload()
    }

    registration.waiting.addEventListener('statechange', listener)

    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
  },
})

if (module.hot) {
  module.hot.accept()
}
