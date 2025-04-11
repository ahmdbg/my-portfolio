import { Mail, Phone, MapPin, Send } from "lucide-react";

import SplashCursor from "../components/SplashCursor/SplashCursor";
import Aurora from "../components/Aurora/Aurora";
import SplitText from "../components/SplitText/SplitText";
import BlurText from "../components/BlurText/BlurText";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import GradientText from "../components/GradientText/GradientText";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Contact() {
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

        <div className="container mx-auto py-32 px-24 relative z-10">
          <div className="text-center mb-24">
            <SplitText
              text="Get In Touch"
              className="text-6xl font-bold text-[#adebff]"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <div className="mt-8 max-w-2xl mx-auto">
              <BlurText
                text="Let's connect and discuss how we can work together to bring your ideas to life."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard
              className="p-8"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#adebff]">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-[#adebff]" />
                      <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-[#adebff]">
                        your.email@example.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-[#adebff]" />
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-[#adebff]">
                        +123 456 7890
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-[#adebff]" />
                      <span className="text-gray-300">Your Location, City, Country</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#adebff]">Social Media</h4>
                  <div className="flex space-x-4">
                    {/* Add your social media links here */}
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="p-8"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 bg-[#001824] border border-[#003459] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#adebff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 bg-[#001824] border border-[#003459] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#adebff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 bg-[#001824] border border-[#003459] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#adebff]"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#003459] hover:bg-[#004579] transition-colors rounded-md"
                >
                  <GradientText
                    colors={["#40ffaa", "#4079ff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-lg font-semibold"
                  >
                    Send Message
                  </GradientText>
                  <Send className="text-[#adebff]" size={20} />
                </button>
              </form>
            </SpotlightCard>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
}