'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);


    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <a
                        href="https://www.stylicaa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="slide-up-and-fade mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm hover:text-foreground transition-colors"
                    >
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                        </span>
                        Currently Full-Stack Intern @ Stylicaa
                    </a>
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">Full Stack</span>
                        <br /> <span className="ml-4">ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Shaik
                        </span>
                        . A Full-Stack & Systems Engineer working across web,
                        mobile, and backend, owning problems end to end from
                        API and schema design through cloud deployment.
                    </p>
                    <div className="flex gap-4 mt-9">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}`}
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Hire Me
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/Assets/Shaik_Junaid_Resume.pdf"
                            variant="white-green"
                            className="banner-button slide-up-and-fade text-black"
                        >
                            View Resume
                        </Button>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            700+
                        </h5>
                        <p className="text-muted-foreground">
                            Problems Solved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
