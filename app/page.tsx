import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ChevronDown } from "lucide-react";


import SplashCursor from "./components/SplashCursor/SplashCursor";
import Aurora from "./components/Aurora/Aurora";
import CircularText from "./components/CircularText/CircularText";
import SplitText from "./components/SplitText/SplitText";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import DecayCard from "./components/DecayCard/DecayCard";
import MagnetLines from "./components/MagnetLines/MagnetLines";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Particles from "./components/Particles/Particles";
import RollingGallery from "./components/RollingGallery/RollingGallery";
import CircularGallery from "./components/CircularGallery/CircularGallery";

import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Project = [
  {
    title: 'TODOLIST',
    image: '/image/experience/download.jpg',
    description: 'A modern task management application with real-time updates.',
    tags: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/todolist',
    live: 'https://todolist-demo.com'
  },
  {
    title: 'TIC TAC TOE',
    image: '/image/experience/project-2.jpg',
    description: 'Classic game reimagined with modern web technologies.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/yourusername/tictactoe',
    live: 'https://tictactoe-demo.com'
  },
  {
    title: '2048',
    image: '/image/experience/project-3.jpg',
    description: 'Popular number puzzle game with smooth animations.',
    tags: ['React', 'TypeScript', 'GSAP'],
    github: 'https://github.com/yourusername/2048',
    live: 'https://2048-demo.com'
  }
];

export default function Home() {
  return (
    <body>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden position-relative bg-[#000202]">
        <div className="absolute top-0 left-0 w-full h-full">
          <SplashCursor />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Aurora
            colorStops={['#00171f', '#003459', '#adebff']}
            amplitude={1.7}
            blend={0.5}
            speed={0.9}
          />
        </div>
        {/* hero section */}
        <div className="container mx-auto h-screen z-10">
          <div className="grid grid-cols-12 h-full items-center">
            <div className="col-span-12 md:col-span-5 relative">
              <DecayCard
                width={400}
                height={550}
                image="/image/profile/profile-2.jpg"
              // className="mx-auto"
              >
                {/* <h2 className="text-2xl font-bold">Decay<br />Card</h2> */}
              </DecayCard>
              <div className="absolute top-5 left-5 md:top-2 md:left-2 z-0" style={{ width: '20px', height: '20px' }}>
                <CircularText
                  text="AHMAD*HASAN*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-[#abedff]"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-col justify-center items-start px-6 md:px-12 gap-8 mt-8 md:mt-0">
                <div className="flex flex-col gap-3 items-start">
                  <SplitText
                    text="Hi! I am AHMAD HASAN"
                    className="text-3xl md:text-5xl font-bold hero-title"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />

                  <SplitText
                    text="Fullstack web developer with AI"
                    className="text-xl md:text-3xl italic text-[#549fd4]"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.9}
                    rootMargin="-50px"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-start md:items-center">
                  <h1 className="text-lg md:text-xl text-white font-bold z-10">I am ready for</h1>
                  <RotatingText
                    texts={['frontend Web dev', 'backend web dev', 'database dev', 'prompt engineer']}
                    mainClassName="px-2 md:px-3 text-[aqua] overflow-hidden py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>

                <div className="max-w-2xl">
                  <BlurText
                    text='"I am a web developer passionate about creating refined, high-performance websites. I blend clean design with modern technologies to build seamless digital experiences that are both visually compelling and functionally powerful—crafted with precision, purpose, and a touch of sophistication."'
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-sm md:text-base text-gray-400 italic leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
        </div>

        {/* project section */}
        <div className="container mx-auto py-20">
          <div className="mb-16 text-center">
            <SplitText
              text="My Projects"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {Project.map((project) => (
              <SpotlightCard
                key={project.title}
                className="custom-spotlight-card w-full p-4 transform hover:scale-105 transition-all duration-300"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#adebff] project-title">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-[#003459] text-[#adebff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#003459] transition-colors"
                      >
                        <Github size={20} className="text-[#adebff]" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#003459] transition-colors"
                      >
                        <ExternalLink size={20} className="text-[#adebff]" />
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#003459] hover:bg-[#003459] transition-all duration-300"
            >
              <GradientText
                colors={["#40ffaa", "#4079ff"]}
                animationSpeed={3}
                showBorder={false}
                className="text-2xl font-bold gradient-text"
              >
                View All Projects
              </GradientText>
              <ChevronDown
                size={24}
                className="text-[#adebff] group-hover:scale-110 transition-all duration-300 rotate-[-90deg]"
              />
            </Link>
          </div>
        </div>

        <div className="py-20">
          <ScrollVelocity
            texts={['Ahmad hasan']}
            velocity={100}
            className="text-[adebff]"
          />
        </div>

        {/* gallery section */}
        <div>
          <div className="mb-16 text-center">
            <SplitText
              text="My Gallery"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          <div className="flex justify-center mb-8">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", " #40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-2xl font-bold gradient-text"
            >
              A collection of my favorite images
            </GradientText>
          </div>
          <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
            <RollingGallery autoplay={true} pauseOnHover={false} />
          </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={-3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>

        {/* skills section */}
        <Skills />


        {/* contact me section */}
        <ContactMe />

        {/* footer */}
        <Footer />
      </div>
    </body>
  );
}
