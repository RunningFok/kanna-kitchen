import { traditionalChinese } from "./font";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-5 sm:px-0 ">
      {/* <div className="relative z-10 py-60 md:py-36 2xl:py-52 flex items-center justify-center ">
        <h1 className="text-neutral-200 font-mono font-extrabold text-4xl sm:text-9xl 2xl:text-semimassive opacity-25 border-solid border-4 sm:border-8 sm:border-spacing-x-14 border-opacity-25">
          KANNA KITCHEN
        </h1>
      </div> */}
      <div className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-full sm:overflow-hidden">
        <video loop autoPlay muted playsInline className="absolute">
          <source src="/static/videos/sushiChef.mp4" typeof="video/mp4" />
        </video>
      </div>
      <div className="sm:hidden w-full h-full">
        <Image
          src={"/static/images/mobileBG.jpg"}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
}
