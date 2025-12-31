import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-30">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground animate-fade-in-up text-balance">
                        Affordable, Fast &<br />
                        Professional Video
                        <br />
                        Creation
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
                        We connect businesses, institutions, events, and
                        individuals with nearby skilled creators to deliver
                        high-quality reels, videos, and digital content —
                        quickly and cost-effectively.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                        <Button
                            size="lg"
                            className="bg-amber-300 text-foreground/80 hover:bg-amber-400 font-semibold text-lg px-8 py-6 group cursor-pointer"
                        >
                            Book a Shoot
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="font-semibold text-lg px-8 py-6 border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent cursor-pointer"
                        >
                            Become a Creator
                        </Button>
                    </div>

                    <div className="pt-12 animate-fade-in-up stagger-3">
                        <p className="text-sm text-foreground/60 mb-4">
                            Hyperlocal & On-Demand
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground/50">
                            <span>Instagram Reels</span>
                            <span className="hidden sm:inline">•</span>
                            <span>YouTube Shorts</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Event Coverage</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Brand Videos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>
        </section>
    );
}
