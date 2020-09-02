import React from "react";

import Layout from '@components/layout';
import Hero from '@components/hero';
import Contact from '@components/contact';

import { About } from '@components';

export default () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

