import React from 'react'
import Trending from '../Trending/Trending'
import Picks from '../Picks/Picks'
import Banner from '../Banner/Banner'
import Sports from '../Sports/Sports'
import International from '../International/International'
import Cards from '../Cards/Cards'
import ScrollTop from '../ScrollTop/ScrollTop'
import National from '../National/National'
import Politics from '../Politics/Politics'
import Message from '../Message/Message'
import Food from '../Food/Food'
import Header2 from '../Main/Header2'

function All() {
  return (
    <>
    {/* <Header2/> */}
    <Cards/>
    <Trending/>
    <Banner/>
    <Picks/>
    <National/>
   
    <Politics/>
    <Food/>
    <Banner/>
    <International/>
    <Sports/>
    <Banner/>
    <ScrollTop/>
    <Message/>
    </>
  )
}

export default All
