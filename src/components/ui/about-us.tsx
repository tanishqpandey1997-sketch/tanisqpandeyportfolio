import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';
import dashboardVideo from '../Video Generation from Animation Request.mp4';

export default function AboutUsSection() {
    return (
        <section className="w-full bg-[#FFFFFF] py-24 md:py-32 relative overflow-hidden text-[#000000]">
            {/* Subtle Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Video Graphic */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center">
                        <div className="absolute z-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-[40px] opacity-50 animate-pulse top-10 left-10" />
                        <div className="absolute z-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen filter blur-[50px] opacity-40 bottom-10 right-10" />

                        {/* Video Mockup */}
                        <div className="relative z-10 w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                            <video
                                src={dashboardVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col gap-10">

                        {/* Main Header area */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                                Empowering your <br className="hidden md:block" />
                                digital future today
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                                We blend cutting-edge artificial intelligence with premium design principles to deliver websites that don't just look spectacular—they perform exceptionally. No boilerplate, just bespoke digital experiences.
                            </p>
                        </div>

                        {/* Sub-feature area */}
                        <div className="space-y-4">
                            <a href="#" className="inline-flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors group">
                                AI-driven rapid prototyping
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="text-gray-500 leading-relaxed max-w-lg">
                                Our proprietary AI workflows allow us to iterate designs in real-time, moving from conceptual wireframes to high-fidelity, interactive prototypes faster than traditional agencies.
                            </p>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Bottom Icon blocks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-2xl shrink-0">
                                    <LayoutDashboard className="w-6 h-6 text-[#000000]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Scalable architectures</h3>
                                    <p className="text-sm text-gray-500">Built for enterprise growth</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-2xl shrink-0">
                                    <Sparkles className="w-6 h-6 text-[#000000]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Intelligent design</h3>
                                    <p className="text-sm text-gray-500">Data-backed UI decisions</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
