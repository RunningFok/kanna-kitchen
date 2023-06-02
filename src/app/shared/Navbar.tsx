import { traditionalChinese } from "../font";

export default function Navbar() {
  return (
    <section className="bg-[#EAE4E2] relative z-10">
      <div className="flex flex-col sm:hidden items-center justify-center pt-3 sm:pt-10 md:pt-10 lg:pt-10 2xl:pt-20 ">
        <h1 className="text-4xl sm:text-7xl text-zinc-600 font-mono font-extrabold border-solid border-8 border-spacing-36 border-zinc-600">
          KANNA KITCHEN
        </h1>
        <div className="flex-grow border-t-4 border-b-4 border-zinc-950"></div>
      </div>

      <header className="w-1/4 sm:w-full">
        <nav className="flex items-center justify-center text-zinc-600">
          <div className="flex flex-col sm:flex-row mx-5 mt-5 sm:mt-5 md:mt-5 lg:mt-0 2xl:mt-5 text-lg sm:text-xl">
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>早餐</h1>
            </div>
            <div className=" px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>冷食</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>定食</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>丼物</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>咖喱</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>烏冬</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>焗物</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>特色</h1>
            </div>
            <div className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min">
              <h1 className={traditionalChinese.className}>飲品</h1>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}
