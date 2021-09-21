import StoryCard from "./StoryCard"
const stories = [
    {
        name: "yoshino",
        src: "/1.jpg",
        profile: "/5.jpg"
    },
    {
        name: "maki",
        src: "/2.png",
        profile: "/5.jpg"
    },
    {
        name: "sogo",
        src: "/3.jpg",
        profile: "/5.jpg"
    },
    {
        name: "tamaki",
        src: "/4.png",
        profile: "/5.jpg"
    }
]

export default function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto h-14">

            {stories.map((story) => (

                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    )
};