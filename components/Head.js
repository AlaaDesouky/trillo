import Head from 'next/head'

export const HEAD = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <title>Trillo &mdash; Your all-in-one booking app</title>
    </Head>
  )
}
