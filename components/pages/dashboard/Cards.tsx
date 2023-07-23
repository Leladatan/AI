"use client";

import {type FC} from 'react';
import {cn} from "@/lib/utils";
import {ArrowRight, Code, ImageIcon, LucideIcon, MessageSquare, Music, VideoIcon} from "lucide-react";
import {Card} from "@/components/ui/card";
import {useRouter} from "next/navigation";

interface ITools {
    label: string;
    color: string;
    icon: LucideIcon;
    bgColor: string;
    href: string;
}

const tools: ITools[] = [
    {
        label: "Conversation",
        icon: MessageSquare,
        bgColor: "bg-violet-500/10",
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        bgColor: "bg-pink-700/10",
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        bgColor: "bg-orange-700/10",
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        bgColor: "bg-emerald-500/10",
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        bgColor: "bg-red-700/10",
        href: "/code",
        color: "text-red-700",
    },
];

const Cards: FC = () => {
    const router = useRouter();

    return (
        <>
            {tools.map(tool => (
                <Card
                    key={tool.href}
                    onClick={() => router.push(tool.href)}
                    className="p-4 border-black/5 flex items-center justify-between
                        hover:shadow-md transition cursor-pointer"
                >
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                            <tool.icon className={cn("w-8 h-8", tool.color)}/>
                        </div>
                        <h3 className="font-semibold">
                            {tool.label}
                        </h3>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </Card>
            ))}
        </>
    );
};

export default Cards;
