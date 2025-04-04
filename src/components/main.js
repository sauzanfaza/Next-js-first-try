import Link from "next/link"

export default function MainPage() {
    return (
        <div className="flex flex-col gap-4 p-8">
            <Link href="/aboutMe">
                <div className="p-4 bg-blue-500 rounded-lg text-white cursor-pointer">About Me</div>
            </Link>
            <Link href="/biodata">
                <div className="p-4 bg-green-500 rounded-lg text-white cursor-pointer">My Biodata</div>
            </Link>
            <Link href="/gallery">
                <div className="p-4 bg-red-500 rounded-lg text-white cursor-pointer">My Gallery</div>
            </Link>
        </div>
    )
}