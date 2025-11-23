'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade max-w-5xl">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b border-white/10 text-muted-foreground slide-up-and-fade text-sm uppercase tracking-wider">
                    This is Me
                </p>

                <div className="grid md:grid-cols-12 gap-8 mt-12">
                    {/* Profile Image Section */}
                    <div className="md:col-span-5 slide-up-and-fade">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-green)] to-primary opacity-20 rounded-full blur-xl group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative">
                                <Image
                                    className="rounded-full w-full max-w-[350px] mx-auto border-2 border-white/10 shadow-2xl"
                                    src="/Assets/profile_pic.jpg"
                                    alt="Shaik Profile Picture"
                                    width={350}
                                    height={350}
                                    priority
                                />
                            </div>
                        </div>


                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="slide-up-and-fade">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                About Me
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I&apos;m a Full Stack Web Developer dedicated to turning ideas into
                                practical, high-impact digital experiences. I build with clarity,
                                intention, and a strong sense of responsibility—crafting solutions
                                that work smoothly in the real world, not just on paper.
                            </p>
                        </div>

                        <div className="slide-up-and-fade p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h4 className="text-xl font-semibold mb-3 text-[var(--neon-green)]">
                                Work Philosophy
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                My work philosophy is simple: write clean logic, structure systems that
                                scale, and ensure every product feels effortless for the user. From
                                responsive front-end interfaces to reliable back-end architectures, I
                                combine technical depth with a problem-solver mindset to deliver
                                solutions that stand the test of time.
                            </p>
                        </div>

                        <div className="slide-up-and-fade p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h4 className="text-xl font-semibold mb-3 text-[var(--neon-green)]">
                                Core Values
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                I value performance, maintainability, and ethical development. Whether
                                I&apos;m optimizing user flows, designing APIs, or improving product
                                reliability, my goal remains the same—build with precision, ship with
                                confidence, and create work that genuinely helps people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
