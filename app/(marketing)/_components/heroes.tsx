import Image from "next/image";

export const Heroes = () => {
    return (
        <div>
            <Image
                src="/documents.webp"
                width="100"
                height="100"
                className="object-contain dark:hidden"
                alt="Documents"
            />
            <Image
                src="/reading.avif"
                width="100"
                height="100"
                className="object-contain dark:hidden"
                alt="Reading"
            />

        </div>
    )
}