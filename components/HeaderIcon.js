export default function HeaderIcon({ Icon, active }) {
    return (
        <div
            className="flex items-center cursor-pointer 
        md:px-7 md:h-10 h-7 px-3 md:hover:bg-gray-100 rounded-xl
        active:border-b-2 active:border-blue-500 group text-gray-500
        ">
            <Icon className={` group-hover:text-blue-500 mx-auto sm:h-6 h-5 ${active && "text-blue-500"}`} />
        </div>
    )
}