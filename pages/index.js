import Head from 'next/head'
import Link from 'next/link'
import { Players } from '../remotion/Players'

export default function Home() {
  return (
    <div className="not-container">
      <Head>
        <title>Remotion Multi Player Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="https://www.remotion.dev/" target="_blank">Remotion</a> AspectRatio Demo by <a href="https://github.com/tomByrer" target="_blank">Tom Byrer</a>
        </h1>
        <h2 className="title">
           Remotion Promo
        </h2>
        <p className="description">
          Please help by leaving <a href="https://github.com/tomByrer/remotion-aspectratio-demo/" target="_blank">&#11088; stars & issues on GitHub</a>.
        </p>

        <Players />
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #124365;
        }

        main {
          padding: 0.5rem 0;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a,
        .description a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active,
        .description a:hover,
        .description a:focus,
        .description a:active {
          text-decoration: underline;
        }

        h1 {
          font-size: 1.62rem;
          line-height: 1.6;
        }
        h2 {
          font-size: 1.4rem;
          line-height: 1.4;
        }

        .title,
        .description {
          margin: 0;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.3rem;
        }

        code {
          background-color: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          font-size: 1.162em;
        }

        * {
          box-sizing: border-box;
        }


        .player {
          padding-left: 22px;
        }

        .player h6 {
          margin: 0.162em 0;
          font-size: 1.162em;
          color: #000;

          margin-left: 27px;
          transform-origin: -27px 0;
          transform: rotate(90deg);
        }

        .player-controlls {
          margin-top: 27px;
        }
        .player-controlls div span {
          display: inline-block;
        }
        .player-controlls button {
          margin: 0.3236em 0.162em;
          padding: 0.162em;
          font-size: 1.162em;
        }

        .log {
          margin-top: 27px;
          font-size: 1.162em;
          height: 13em;
        }
        .transcript, .webvtt {
          margin-top: 27px;
          width: 28em;
        }
        textarea {
          height: 18em;
          width: inherit;
          font-size: 1.162em;
        }
        h4 {
          margin: 0 0 0.618em 0;
        }
      `}</style>
    </div>
  )
}
