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
          <section className="h-screen">
            <div>
              <nav className="py-10 px-10 mb-12 flex justify-end">
                <ul className="flex items-center">
                  <li className="text-4xl flex gap-5"> 
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiFillMail />
                  </li>
                  <li><a className="bg-gradient-to-br from-emerald-400 to-blue-800 text-white font-sans px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
                </ul>
              </nav>  
            </div>
          
            <div className="justify-center items-center">
              <div className="text-center p-10">
                <h2 className="text-6xl py-2 font-sans">Hello! I'm <span className="text-emerald-600">Kevin Thai</span></h2>
                <h3 className="text-5xl py-2 font-sans">Software Engineer</h3>
                <p className="font-sans">Student at <span className="text-emerald-600">California State University Long Beach</span></p>
                <p className="font-sans py-2">Graduating <span className="text-emerald-600">December 2023</span></p>
                <button className="bg-transparent border border-emerald-600 text-emerald-600 font-sans px-6 py-2 rounded-md hover:text-white hover:bg-emerald-600">Explore</button>
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
