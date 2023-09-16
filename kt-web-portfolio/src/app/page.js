'use client'
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import ParticleBG from './components/Particles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Thai Portfolio</title>
      </Head>

      <main>
        <div className="bg-gradient-to-b from-slate-900 to-gray-700">
          <ParticleBG />
          <section className="min-h-screen">
            <div>
              <nav className="py-10 px-10 mb-12 flex justify-end">
                <ul className="flex items-center">
                  <li className="text-4xl flex gap-5"> 
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiFillMail />
                  </li>
                  <li><a className="bg-gradient-to-tl from-sky-800 to-emerald-400 text-white font-sans px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
                </ul>
              </nav>  
            </div>
          
            <div className="flex justify-center items-center">
              <div className="text-center p-10">
                <h2 className="text-6xl py-2 font-sans">Hello! I'm <span className="text-emerald-600">Kevin Thai</span></h2>
                <h3 className="text-5xl py-2 font-sans">Full Stack Developer</h3>
                <p className="font-sans">Student at <span className="text-emerald-600">California State University Long Beach</span></p>
                <p className="font-sans py-2">Graduating <span className="text-emerald-600">December 2023</span></p>
              </div>
            </div>
          </section>
        </div>

        <div className="min-h-screen bg-gray-900">
          <section>
            <div>
              <h3 className="text-4xl text-emerald-600 font-sans justif-center font-bold px-10 py-5">Skills</h3>
            </div>
            <div className="text-center p-10">
                
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
