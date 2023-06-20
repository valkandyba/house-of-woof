import React from 'react';

import { HomePageProps } from './types';

import Layout from "../../components/Layout/Layout/Layout";
import Banner from "../../components/Banner/Banner";

const HomePage: React.FC<HomePageProps> = () => {
  return(
      <Layout>
          <Banner/>
      </Layout>
  )
};

export default HomePage;
