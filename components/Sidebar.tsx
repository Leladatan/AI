"use client";

import {FC} from "react";
import Link from "next/link";
import {Inknut_Antiqua} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {Code, ImageIcon, LayoutDashboard, LucideIcon, MessageSquare, Music, Settings, VideoIcon} from "lucide-react";

const inknut: NextFont = Inknut_Antiqua({ weight: "600", subsets: ["latin"] });

export interface routes {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
}

const routes: routes[] = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-red-700",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

const Sidebar: FC = () => {
    const pathname: string = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="flex flex-col gap-y-2 px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 md-14">
                    <div className="relative w-8 h-8 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#a78bfa">
                            <path
                                d="M50.299 6.573C40.379 16.97 34.043 32.63 33.966 50.181 33.89 67.732 40.088 83.518 49.918 94c-2.85-15.867-.277-33.22 8.136-47.2 2.137-3.551 4.54-6.7 7.144-9.43C62.982 25.116 57.655 14.402 50.3 6.573z"
                                />
                            <path
                                d="M6.181 24.14c-2.92 15.853-.477 33.146 7.875 47.163 8.351 14.017 20.351 21.873 33.206 22.693-9.876-10.44-15.602-26.198-15.602-43.75 0-4.49.406-8.828 1.181-13.018-7.634-8.035-17.058-12.488-26.66-13.089zm87.775.413C60.111 30.71 47.4 65.07 52.304 93.998 86.35 87.84 98.923 53.663 93.956 24.553z"
                                />
                        </svg>
                    </div>
                    <h1 className={cn("text-violet-400 text-2xl", inknut.className)}>
                        <span className="text-fuchsia-500">AI</span>Platform
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map(route => (
                        <Link href={route.href} key={route.href}
                              className={cn("text-sm group flex p-3 w-full justify-start " +
                                  "font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                  pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                              )}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                <h2>{route.label}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
