import Head from 'next/head';
import Layout from '../components/layout';
import ContactUs from '../components/contactUs';

export default function Home({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>This is the home page</title>
      </Head>
      <ContactUs></ContactUs>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}