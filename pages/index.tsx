import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Main from './Main'
// import About from './About'
import IntroQuestionScreen from './survey'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "../reducers/questionReducer"

import Link from 'next/link'

const store = configureStore({
  reducer:{
    question: questionReducer,
    
  },

})

export default function Home() {
  return (
    <>
      <Head>
        <title>Genuine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>

      </Head>
      <main >
        <Main/>
     
      </main>
    </>
  )
}
