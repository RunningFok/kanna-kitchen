"use client";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { menuSharp, closeSharp, callOutline } from "ionicons/icons";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MenuItem from "./MenuItem";

interface Item {
  _id: string;
  item_alphabet: string;
  item_note: string;
  item_english: string;
  item_category: string;
  item_name: string;
  item_price: number;
}

export default function Navbar() {
  const router = useRouter();
  let [openTab, setOpenTab] = useState(false);
  let [dropMenu, setDropMenu] = useState(false);
  let [category, setCategory] = useState("");

  const [itemList, setItemList] = useState<Array<Item>>([]);

  function openMenu() {
    setOpenTab(!openTab);
    setDropMenu(false);
  }

  function homeButton() {
    router.push("/");
    setOpenTab(false);
    setDropMenu(false);
  }

  async function displayItems(category: string) {
    setDropMenu(!dropMenu);
    router.push("/");
    try {
      console.log("FETCHING DOCUMENTS");
      const fetchedItems = await fetch(`/api/${category}`, {
        cache: "force-cache",
      }).then((response) => response.json());
      console.log("FETCHED DOCUMENTS");
      setCategory(category);
      setItemList(fetchedItems);
      console.log(fetchedItems)
      console.log("itemlist", itemList);
    } catch (error) {
      console.log(error);
    }
  }

  let Links = [
    { name: "早餐", category: "早餐" },
    { name: "冷食", category: "冷食" },
    { name: "定食", category: "定食" },
    { name: "丼物", category: "丼物" },
    { name: "咖喱", category: "咖喱" },
    { name: "烏冬", category: "烏冬" },
    { name: "焗物", category: "焗物" },
    { name: "特色", category: "特色" },
    { name: "飲品", category: "飲品" },
  ];
  return (
    <header className="bg-[#EAE4E2] sticky top-0 z-10">
      <nav className=" flex flex-row sm:hidden  items-center justify-between pr-5 pt-3 pb-1">
        <div className="ml-2 mb-2 text-2xl text-zinc-600 font-mono font-extrabold outline outline-offset-4 outline-2">
          <button onClick={() => homeButton()}>LEO KITCHEN</button>
        </div>

        <div
          onClick={() => openMenu()}
          className="right-8 top-6 cursor-pointer"
        >
          <IonIcon
            icon={openTab ? closeSharp : menuSharp}
            size="large"
            color="dark"
          />
        </div>
        <ul
          className={`absolute flex flex-col items-center justify-end pb-12 bg-white z-[-1] left-0 w-full transition-all duration-400 ease-in ${
            openTab ? "top-14 " : "top-[-800px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl my-4">
              <button
                onClick={() => setOpenTab(false)}
                className="font-bold text-zinc-500 hover:text-sky-400 duration-500"
              >
                <Link href={`/${link.category}`}>{link.name}</Link>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hidden sm:block w-1/4 sm:w-full md:w-full">
        <nav className="flex items-center justify-center text-zinc-600">
          <div className="flex flex-col sm:flex-row sm:mx-5 sm:mt-5 md:mt-5 lg:mt-0 2xl:mt-5 text-lg sm:text-xl ">
            {Links.map((link) => (
              <li
                key={link.name}
                className="px-1 py-3 sm:px-8 sm:py-3 md:px-12 md:py-10 sm:w-min list-none"
              >
                <motion.button
                  type="button"
                  onClick={() => displayItems(link.category)}
                  className="font-bold  text-zinc-500 hover:text-sky-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.name}
                </motion.button>
              </li>
            ))}
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {dropMenu && (
          <motion.div
            key="categoryTab"
            className="fixed bg-sky-700 z-20 flex flex-col h-full w-full items-center justify-center bg-opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 20,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
          >
            <div className="flex flex-row lg:text-2xl 2xl:text-4xl text-neutral-200 tracking-wide lg:pb-5 2xl:pb-10">
              <IonIcon
                icon={callOutline}
                size="medium"
                color="light"
                className="pt-1 px-1"
              />
              6741 3902
            </div>
            <div className="flex lg:text-4xl 2xl:text-7xl text-neutral-200 font-bold tracking-wide lg:pb-5 2xl:pb-20">
              {category}
            </div>
            <motion.div
              className="flex flex-row lg:gap-12 2xl:gap-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, x: 20 }}
            >
              {itemList.map((item) => (
                <MenuItem
                  alphabet={item.item_alphabet}
                  name={item.item_name}
                  image={item.item_note}
                  price={item.item_price}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
