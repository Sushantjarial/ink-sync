"use client"

import { useState } from "react";

export function FloatingDock({
    title,
    icon,
    href,
}: {
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <a href={href} onClick={() => setClicked(true)}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={cn(
                    "relative flex aspect-square items-center justify-center rounded-full transition-colors",
                    clicked
                        ? "bg-blue-500 dark:bg-blue-700"
                        : hovered
                        ? "bg-gray-300 dark:bg-neutral-700"
                        : "bg-gray-200 dark:bg-neutral-800"
                )}
            >
                {hovered && (
                    <div className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white">
                        {title}
                    </div>
                )}
                <div className="flex items-center justify-center">{icon}</div>
            </div>
        </a>
    );
}
