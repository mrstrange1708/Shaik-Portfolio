'use client';

import React from "react";
import { TimelineDemo } from "@/components/ui/timeline";
import ParticleBackground from "@/components/ParticleBackground";
import { TIMELINE_DATA } from "@/lib/data";
import Image from "next/image";

export default function Timeline() {
    const data = TIMELINE_DATA.map((item) => ({
        title: item.title,
        content: (
            <div>
                <p className="mb-8 text-lg font-normal text-foreground md:text-sm">
                    {item.content.description}
                </p>

                {item.content.highlights && (
                    <div className="mb-8">
                        {item.content.highlights.map((highlight, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 text-lg text-foreground md:text-sm mb-2"
                            >
                                {highlight}
                            </div>
                        ))}
                    </div>
                )}

                {item.content.projects && (
                    <div className="grid grid-cols-2 gap-4">
                        {item.content.projects.map((project, idx) => (
                            <div key={idx} className="relative group">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center p-4">
                                    <h4 className="text-white font-bold text-sm md:text-base mb-1">
                                        {project.name}
                                    </h4>
                                    <p className="text-white/80 text-xs text-center">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ),
    }));

    return (
        <div className="relative z-0" id="timeline">
            <ParticleBackground />
            <TimelineDemo data={data} />
        </div>
    );
}
