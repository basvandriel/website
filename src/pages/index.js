import React from "react";

import Layout from '@components/layout';
import Hero from '@components/hero';
import Contact from '@components/contact';

import { About, Services } from '@components';

export default () => {
  return (
    <Layout>
      <>
        <Hero />
        <About />
        <Services />
        <Contact />
      </>
    </Layout>
  );
};

