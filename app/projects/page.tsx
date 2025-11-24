'use client';

import { PROJECTS } from '@/lib/data';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import TransitionLink from '@/components/TransitionLink';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Github } from 'lucide-react';

export default function ProjectsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                <h1 className="text-6xl md:text-8xl font-anton text-center mb-16 text-foreground">
                    ALL PROJECTS
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.slug}
                            onClick={() => router.push(`/projects/${project.slug}`)}
                            className="cursor-pointer"
                        >
                            <CardContainer
                                className="inter-var"
                                containerClassName="py-5"
                            >
                                <CardBody
                                    className="bg-background-light relative group/card hover:shadow-2xl hover:shadow-foreground/[0.05] border-border/50 w-full h-auto rounded-xl p-6 border"
                                >
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-foreground dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>

                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-muted-foreground text-sm max-w-sm mt-2"
                                    >
                                        {project.techStack.slice(0, 3).join(' • ')}
                                    </CardItem>

                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src={project.thumbnail}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt={project.title}
                                        />
                                    </CardItem>

                                    <div className="flex justify-between items-center mt-6">
                                        <CardItem
                                            translateZ={20}
                                            className="text-xs text-muted-foreground"
                                        >
                                            {project.year}
                                        </CardItem>

                                        {project.sourceCode && (
                                            <CardItem
                                                translateZ={20}
                                                as="a"
                                                href={project.sourceCode}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs text-foreground/70 hover:text-foreground transition-colors"
                                                onClick={(e: React.MouseEvent) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <Github size={16} />
                                                <span>View Code</span>
                                            </CardItem>
                                        )}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
