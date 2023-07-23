import {Code, ImageIcon, LucideIcon, MessageSquare, Music, VideoIcon} from "lucide-react";

export interface ITools {
    label: string;
    color: string;
    icon: LucideIcon;
    bgColor: string;
    href: string;
}

export const tools: ITools[] = [
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
