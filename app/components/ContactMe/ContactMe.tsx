'use client'

import SplitText from "../SplitText/SplitText";



const ContactMe = () => {
    return (
        <div>
            {/* Contact Me Section */}
            <div className="container mx-auto py-20">
                <div className="mb-16 text-center">
                    <SplitText
                        text="Contact Me"
                        className="text-4xl font-bold text-[#adebff] section-title"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>

                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-[#001824]/50 backdrop-blur-lg rounded-2xl p-8 border border-[#003459]">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const message = `*New Contact Form Submission*\n\nName: ${formData.get('name')}\nWhatsApp: ${formData.get('whatsapp')}\n\nMessage: ${formData.get('message')}`;
                                window.open(`https://wa.me/+6285640054840?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[#adebff] text-sm font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="whatsapp" className="text-[#adebff] text-sm font-medium">
                                        Your WhatsApp Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        pattern="[0-9]+"
                                        className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300"
                                        placeholder="628xxxxxxxxxx"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[#adebff] text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-[#003459] to-[#549fd4] rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                                >
                                    <div className="absolute inset-0 bg-[#adebff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                    <span className="relative flex items-center gap-2 text-[#adebff] font-semibold">
                                        Send via WhatsApp
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        >
                                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Or reach me directly via WhatsApp at{' '}
                            <a
                                href="https://wa.me/085640054840"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#549fd4] hover:text-[#adebff] transition-colors"
                            >
                                +62 856-4005-4840
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe