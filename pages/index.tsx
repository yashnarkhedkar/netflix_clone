import React from 'react';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';

export async function getServerSideProps(context : NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect : {
        destination : '/auth',
        permanent : false,
      }
    }
  }

  return {
    props : {}
  }
}

const Home = () => {
  return (
    <>
      <Navbar/>
      <BillBoard/>
    </>
  )
}

export default Home;
