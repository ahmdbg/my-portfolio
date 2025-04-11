'use client'

import { useState } from "react";

import MetaBalls from "../MetaBalls/MetaBalls"
import SplitText from "../SplitText/SplitText"

import { ChevronDown } from "lucide-react";



const Skills = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    return (
        <>
            {/* what i do */}
            <div className="container mx-auto py-20">
                <div className="mb-16 text-center">
                    <SplitText
                        text="What I Do"
                        className="text-4xl font-bold text-[#adebff] section-title"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>

                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-6">
                        <div className="z-10 h-full flex justify-center items-center">

                            <MetaBalls
                                color="#adebff"
                                cursorBallColor="#adebff"
                                cursorBallSize={2}
                                ballCount={15}
                                animationSize={15}
                                enableMouseInteraction={true}
                                enableTransparency={true}
                                hoverSmoothness={0.05}
                                clumpFactor={1}
                                speed={0.3}
                            />
                        </div>
                    </div>

                    <div className="col-span-6">
                        <div className="space-y-4">
                            {/* Frontend Development */}
                            <div className="border border-[#003459] rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                                >
                                    <h3 className="text-xl font-semibold">Frontend Development</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${activeAccordion === 0 ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeAccordion === 0 && (
                                    <div className="px-6 py-4 body-text text-gray-400">
                                        <p>Building responsive and interactive user interfaces using modern frameworks like React and Next.js.
                                            Implementing pixel-perfect designs with Tailwind CSS and creating smooth animations.</p>
                                    </div>
                                )}
                            </div>

                            {/* Backend Development */}
                            <div className="border border-[#003459] rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                                >
                                    <h3 className="text-xl font-semibold">Backend Development</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeAccordion === 1 && (
                                    <div className="px-6 py-4 body-text text-gray-400">
                                        <p>Developing robust server-side applications using Node.js and Express.
                                            Creating RESTful APIs and handling database operations with MongoDB.</p>
                                    </div>
                                )}
                            </div>

                            {/* AI interactiom */}
                            <div className="border border-[#003459] rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                                >
                                    <h3 className="text-xl font-semibold">Database Design</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeAccordion === 2 && (
                                    <div className="px-6 py-4 body-text text-gray-400">
                                        <p>Designing and implementing efficient database schemas.
                                            Working with both SQL and NoSQL databases to ensure optimal data storage and retrieval.</p>
                                    </div>
                                )}
                            </div>

                            {/* API Integration */}
                            <div className="border border-[#003459] rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                                >
                                    <h3 className="text-xl font-semibold">Interaction with AI</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${activeAccordion === 3 ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeAccordion === 3 && (
                                    <div className="px-6 py-4 body-text text-gray-400">
                                        <p>Integrating third-party APIs and services.
                                            Building secure and efficient API endpoints for seamless data exchange.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills