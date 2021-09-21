import Stories from "./Stories";

export default function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-auto border-red-500 border-solid border-2">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">

                <Stories />

            </div>
        </div>

    )
}