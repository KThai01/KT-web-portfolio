'use client'

import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

import Particles from 'react-tsparticles';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Thai Portfolio</title>
      </Head>

      <main className="bg-gradient-to-b from-slate-900 to-gray-700">
        <div>
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-end">
              <ul className="flex items-center">
                <li className="text-3xl flex gap-5"> 
                  <AiFillLinkedin />
                  <AiFillGithub />
                  <AiFillMail />
                </li>
                <li><a className="bg-gradient-to-tl from-sky-800 to-emerald-400 text-white font-mono px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
              </ul>
            </nav>

            <div className="flex justify-center items-center">
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 font-mono">Hello! I'm <span className="text-emerald-600">Kevin Thai</span></h2>
                <h3 className="text-4xl py-2 font-mono">Full Stack Developer</h3>
                <p className="font-mono">Student at <span className="text-emerald-600">California State University Long Beach</span></p>
                <p className="font-mono py-2">Graduating <span className="text-emerald-600">December 2023</span></p>
              </div>
            </div>

              <Particles
                options={{
                  fullScreen: {
                    enable: true,
                    zIndex: 0
                  },
                  particles: {
                    number: {
                      value: 100,
                      limit: 100,
                      density: {
                        enable: true,
                        value_area: 500
                      }
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "images/github.svg",
                        width: 10,
                        height: 10
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: true,
                      anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: false
                      }
                    },
                    size: {
                      value: 10,
                      random: true,
                      anim: {
                        enable: true,
                        speed: 10,
                        size_min: 10,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 100,
                      color: "#ffffff",
                      opacity: 1,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                }}
              />
          </section>
        </div>

        <section className="min-h-screen">
          <div>
            <h3 className="text-4xl text-emerald-600 font-mono justif-center font-bold">Skills</h3>
            <p className="text-xl">Skills I've picked up through school and projects</p>
          </div>

          <div>
            <div className="text-center p-10">
              <img src="https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png" alt="Angular" width={100} height={100}></img>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
