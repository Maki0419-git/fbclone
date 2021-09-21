import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import { signOut } from "next-auth/client"
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/solid"
import {
    FlagIcon,
    SearchIcon,
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

export default function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:p-5 shadow-md">
            {/* left */}
            <div className="flex items-center ">
                <Image
                    src="https://links.papareact.com/5me"
                    height={40}
                    width={40}
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="hidden sm:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                        type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex  " >
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile Pic */}
                <Image
                    onClick={signOut}
                    src="/m.png"

                    height={40}
                    width={40}
                    layout="fixed"
                    className="rounded-full cursor-pointer"
                />
                <BellIcon className="icon" />
                <ChatIcon className="icon" />
                <ChevronDownIcon className="icon" />
                <p className="whitespace-nowrap font-semibold pr-3">Yoshino</p>
            </div>
        </div>

    )
}