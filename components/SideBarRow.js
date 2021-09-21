export default function SideBarRow({ src, Icon, title }) {
    return (
        <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-200 rounded-xl
        ">
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"

                />
            )}
            {Icon && <Icon
                className="h-7 w-7 text-blue-500" />}
            <p className="hidden sm:inline-flex font-medium pr-12">{title}</p>
        </div>
    )
}