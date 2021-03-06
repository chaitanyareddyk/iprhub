import Head from "next/head";

const Meta = ({ title }) => (
  <Head>
    <title>{title ? title + " | iprhub.io" : "iprhub.io"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
  </Head>
);

export default Meta;
