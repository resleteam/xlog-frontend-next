import Image from "next/image";

export default function SideImage({ title }: { title: string }) {
  return (
    <div className="relative">
      <Image
        src="/pawel-czerwinski-JEV7CrJTUNE-unsplash 1.png"
        alt="Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="font-bold transform -rotate-90 text-8xl text-white">
          {title}
        </div>
      </div>
    </div>
  );
}
