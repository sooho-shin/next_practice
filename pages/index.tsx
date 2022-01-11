import Link from 'next/link'
import Router,{ useRouter } from 'next/router'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'

const IndexPage = () => {
  const router = useRouter();

  useEffect(function(){
    setTimeout(function(){
      router.push('/home');
    },1000)
  },[])


  return(
    <Layout>
      메인
    </Layout>
  ) 
}
  
    
  


export default IndexPage
