import Image from "next/image";

export default function MobileMenuItem({
  alphabet,
  name,
  englishName,
  price,
}: {
  alphabet: string;
  name: string;
  englishName: string;
  price: number;
}) {
  return (
    <div className="flex flex-col p-4 pb-2 bg-neutral-100 rounded-lg tracking-wider text-zinc-500 sm:hidden">
      <Image
        src={"/static/images/burger.jpg"}
        alt=""
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h1 className="text-sm px-2 pt-2 font-bold"><span className="font-medium">{alphabet}</span>餐</h1>
      <h2 className="text-sm row-span-1 px-2 font-bold">{name}</h2>
      {/* <h2>{englishName}</h2> */}
      <h4 className="text-sm row-span-1 px-2">${price}</h4>
    </div>
  );
}
