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
import { GoogleAnalytics } from '@next/third-parties/google';


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
        default: 'Shaik Junaid Sami | Full-Stack & Systems Engineer',
        template: '%s | Shaik Junaid Sami',
    },
    description:
        'Shaik Junaid Sami is a Full-Stack & Systems Engineer working across web, mobile, and backend with TypeScript, React, Node.js, Kotlin and Swift. Explore projects, skills, and experience.',
    keywords: [
        'Shaik Junaid Sami',
        'Shaik Junaid Sami Portfolio',
        'Full Stack Developer',
        'Full Stack Engineer',
        'Systems Engineer',
        'React Native Developer',
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
        title: 'Shaik Junaid Sami | Full-Stack & Systems Engineer',
        description:
            'Official portfolio of Shaik Junaid Sami. Full-Stack & Systems Engineer building across web, mobile, backend and cloud.',
        url: 'https://www.theshaik.tech',
        siteName: 'Shaik Junaid Sami Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shaik Junaid Sami | Full-Stack & Systems Engineer',
        description:
            'Explore the portfolio of Shaik Junaid Sami, a Full-Stack & Systems Engineer building across web, mobile, backend and cloud.',
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
            <GoogleAnalytics gaId="G-YZYZ7NPJ3C" />
        </html>
    );
}
