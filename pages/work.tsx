import Link from 'next/link'
// import Image from 'next/image'
import styled, { css,keyframes } from 'styled-components'
import EffectComponent from '../components/EffectBox'
import Layout from '../components/Layout'
import { Textfit } from 'react-textfit';
import { useEffect, useRef, useState } from 'react'
import LeftWrapperComponent from '../components/LeftWrapper'
import RightWrapperComponent from '../components/RightWrapper'
import FooterComponent from '../components/Footer'
import ProductBgFirst from "../public/images/img_product_first.jpg"
import ProductBgSecond from "../public/images/img_product_second.jpg"
import ProductBgThird from "../public/images/img_product_third.jpg"
import { useWindowScroll, useWindowSize } from 'react-use'
import { useRouter } from 'next/router'
import GalleryComponent from '../components/GalleryBox'



function WorkPage (){
  const [effectTitle,setEffectTitle] = useState('work');
  const [effectRollingText,setEffectRollingText] = useState('SOOHO about')
  const mainContainer = useRef<any>();
  const infoText = useRef<any>();
  const {x:scrollX, y:scrollY} = useWindowScroll();
  const {width:windowWidth, height:windowHeight} = useWindowSize();
  // const router = useRouter()

  useEffect(()=>{
    const mainHeight = mainContainer.current.offsetHeight
    if(windowHeight + scrollY > mainHeight){
      // setInfoTextMaigin(windowHeight + scrollY - mainHeight)
      infoText.current.style.transform = `translate3d(0px,-${windowHeight + scrollY - mainHeight}px,0px)`
    }else{
      // setInfoTextMaigin(0)
      infoText.current.style.transform = `translate3d(0px,0px,0px)`
    }
  },[scrollY,windowHeight,windowWidth])

  return (
    <Layout>
      <MainWrapper >
      <Section ref={mainContainer}>
      <LeftWrapperComponent>
        <AboutLeft>
            <div className="about-info" ref={infoText}>
              <p>
                If we were real we would be <span className="sec-font">PROUD OF OUR WORK.</span>
              </p>
            </div>
        </AboutLeft>
      </LeftWrapperComponent>
      <RightWrapperComponent>
        <GalleryGroup>
          <GalleryComponent text={'show me the money'} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird} ></GalleryComponent>
          <GalleryComponent text={'black sheep wall'} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird}></GalleryComponent>
          <GalleryComponent text={'show me the money'} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird}></GalleryComponent>
          <GalleryComponent text={'black sheep wall'} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird}></GalleryComponent>
          <GalleryComponent text={'power overwhelming'} border={false} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird}></GalleryComponent>
          <GalleryComponent text={'the gathering'} border={false} imgFirst={ProductBgFirst} imgSecond={ProductBgSecond} imgThird={ProductBgThird}></GalleryComponent>
        </GalleryGroup>
      </RightWrapperComponent>
      </Section>
      <FooterComponent/>
      <EffectComponent text={effectTitle} rollingText={effectRollingText}/>

    </MainWrapper>
  </Layout>
  )  
}

const GalleryGroup = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top: calc(40px + 2.8vw);
  border-top:4px solid #000;
`

// const Title = styled.div`
//   border-top:4px solid #000;
//   border-bottom:4px solid #000;
//   margin-top: calc(40px + 2.8vw);
//   *{
//     line-height:1;
//     font-weight:bold;
//   }
// `

const AboutLeft = styled.div`
  width:25vw;
  padding-right:40px;
  height:100vh;
  position: fixed;
  left:0;
  top:0;

  .about-info{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    padding:10px;
    padding-right:50px;
    box-sizing:border-box;

    >p{
      font-size: 2vw;
    }
  }
`

const Section = styled.div`
  width:100%;
  border-bottom:4px solid #000;
  display:flex;
  height:fit-content;

  &.no-border{
    border:none;
  }

  &.home-about{
    padding-bottom:120px;
  }

  &.fd-c{
    flex-direction:column;
  }

  .text-right{
    text-align:right;

    a{
      margin-top:2vw;
    }
  }
`

const MainWrapper = styled.div`
    width:100%;
    height:100%;
    display: block;
    /* justify-content: center; */

`


export default WorkPage

