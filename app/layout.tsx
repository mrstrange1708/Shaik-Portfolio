import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';


const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: {
        default: 'Shaik Junaid Sami | Full Stack Developer Portfolio',
        template: '%s | Shaik Junaid Sami',
    },
    description:
        'Shaik Junaid Sami is a Full Stack Developer specializing in JavaScript, React, Next.js, and scalable web applications. Explore projects, skills, and experience.',
    keywords: [
        'Shaik Junaid Sami',
        'Shaik Junaid Sami Portfolio',
        'Full Stack Developer',
        'Frontend Developer',
        'React Developer',
        'Next.js Developer',
        'JavaScript Developer',
        'Web Developer Portfolio',
    ],
    authors: [{ name: 'Shaik Junaid Sami' }],
    creator: 'Shaik Junaid Sami',
    publisher: 'Shaik Junaid Sami',
    metadataBase: new URL('https://www.theshaik.tech'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Shaik Junaid Sami | Full Stack Developer Portfolio',
        description:
            'Official portfolio of Shaik Junaid Sami. Full Stack Developer with experience in React, Next.js, and scalable web systems.',
        url: 'https://www.theshaik.tech',
        siteName: 'Shaik Junaid Sami Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Shaik Junaid Sami Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shaik Junaid Sami | Full Stack Developer Portfolio',
        description:
            'Explore the portfolio of Shaik Junaid Sami, a Full Stack Developer building modern, scalable web applications.',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
