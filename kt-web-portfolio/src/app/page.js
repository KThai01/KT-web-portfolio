import Head from "next/head";
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Thai Portfolio</title>
      </Head>

      <main className="bg-gradient-to-b from-slate-900 to-gray-700 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-mono">Kevin Thai</h1>
            <ul className="flex items-center">
              <li className="text-3xl flex justify-center gap-5">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillMail />
              </li>
              <li><a className="bg-gradient-to-tl from-sky-800 to-emerald-400 text-white font-mono px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-emerald-600 font-mono">Kevin Thai</h2>
            <h3 className="text-2xl py-2 font-mono">Full Stack Web Developer</h3>
            <p className="font-mono">Student at <span className="text-emerald-600">California State University Long Beach</span> graduating <span className="text-emerald-600">December 2023</span></p>
          </div>

        </section>
      </main>
    </div>
  )
}
