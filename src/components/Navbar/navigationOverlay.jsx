import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from '@solana/wallet-adapter-react';
import { MdMenu } from "react-icons/md";
import { useRouter } from 'next/router';

export const NavOverlay = () => {
    const { publicKey, disconnect } = useWallet();
    const router = useRouter();
    const walletAddress = publicKey ? publicKey.toString() : null;

    const handleDisconnect = () => {
        disconnect();
        router.push('/');
    };

    const handleProfileClick = () => {
        router.push(`/profile?address=${walletAddress}`);
    };

    const handleMyCoursesClick = () => {
        router.push(`/mycourses?address=${walletAddress}`);
    };

    const handleCreateCourseClick = () => {
        router.push(`/createCourse?address=${walletAddress}`);
    };

    return (
        <DropdownMenu className="h-80 w-80">
            <DropdownMenuTrigger className="">
                <MdMenu className="h-8 w-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={
                `p-2 shadow-xl ${router.pathname !== '/' ? 'bg-[#FFE502] text-black' : 'bg-white text-black'}`
            }>
                <DropdownMenuItem className="px-4 py-2 text-lg hover:cursor-pointer" onClick={handleProfileClick}>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 text-lg hover:cursor-pointer" onClick={handleMyCoursesClick}>
                    My Courses
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 text-lg hover:cursor-pointer" onClick={handleCreateCourseClick}>
                    Create Course
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="px-4 py-2 text-lg hover:cursor-pointer"
                    onClick={handleDisconnect}
                >
                    Disconnect
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
