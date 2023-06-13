import Image from "next/image";

export default function MenuItem({
  alphabet,
  name,
  image,
  price,
}: {
  alphabet: string;
  name: string;
  image: string;
  price: number;
}) {
  const imageURL = `/static/images/${image}.jpg`;
  console.log(imageURL)
  return (
    <div className="flex flex-col bg-neutral-100 rounded-lg tracking-wider font-bold text-zinc-500 mb-36 p-8 sm:w-44 lg:w-64 2xl:w-80 lg:gap-2 2xl:gap-5">
      <Image
        src={imageURL}
        alt=""
        width={400}
        height={400}
        className="rounded-lg"
      />
      <h1 className="sm:text-lg lg:text-xl 2xl:text-2xl">
        <span className="font-medium">{alphabet}</span>餐
      </h1>
      <h2 className="sm:text-lg lg:text-xl 2xl:text-2xl">{name}</h2>
      {/* <h2>{englishName}</h2> */}
      <h4 className="sm:text-lg 2xl:text-xl">${price}</h4>
    </div>
  );
}
