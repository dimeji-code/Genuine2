import React from 'react'
import { MuseoModerno } from 'next/font/google'

const museomoderno = MuseoModerno({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['200','400','600', '700']
})
type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="flex justify-between items-center text-[#1f1f2a] px-[10%] h-[8vh] w-full top-0 bg-[#fbfbfb] sticky" >
    <a className={`${museomoderno.className} text-xl`} href="/">genuine</a>

    <ul className="flex flex-row ">
      <li className="nav-item mx-5">
        <a href="/about">about</a>
      </li>

      <li className="nav-item">
        <a href='https://dimeji-code.github.io/Genuine/' target = "_blank">V1</a>
      </li>
    </ul>
  </nav> 
  )
}

export default Header