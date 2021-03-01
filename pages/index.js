import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container"  style={{
      backgroundImage: `url(${"/images/home.jpg"})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "right"
    }}>
      <Head>
        <title>Dogs' World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Click
           <Link href="/dogs">
            <a> here </a>
          </Link>
          to enter our world
        </h1>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;  
          justify-content: left;
          align-items: center;
          margin-top: 40px;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #ffffff
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
