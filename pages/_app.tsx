import Header from '@/components/Header'
import questionReducer from '@/reducers/questionReducer'
import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:{
    question: questionReducer,
    
  },

})

export default function App({ Component, pageProps }: AppProps) {
  return( <Provider store={store} >
    <Header/>
    <Component {...pageProps} /> 
  </Provider>)
}
