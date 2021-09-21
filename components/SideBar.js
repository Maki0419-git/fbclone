import { useSession } from "next-auth/client"
import SideBarRow from "./SideBarRow";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline";


export default function sideBar() {
    // const [session,loading]=useSession();
    return (
        <div className="p-2 ml-5 max-w-[600px] xl:min-w-[300px] ">
            <SideBarRow Icon={ChevronDownIcon} title="More..." />
            <SideBarRow Icon={ShoppingBagIcon} title="Shop" />
            <SideBarRow Icon={UserGroupIcon} title="Groups" />
        </div>

    )
}