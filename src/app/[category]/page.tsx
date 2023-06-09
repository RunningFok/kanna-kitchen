"use client";

import { useState, useEffect } from "react";
import MobileMenuItem from "../shared/MobileMenuItem";
import { IonIcon } from "@ionic/react";
import { callOutline } from "ionicons/icons";

interface Item {
  _id: string;
  item_alphabet: string;
  item_note: number;
  item_english: string;
  item_category: string;
  item_name: string;
  item_price: number;
}

export default function categoryPage(context: any) {
  const [itemList, setItemList] = useState<Array<Item>>([]);
  const { category } = context.params;

  async function getData() {
    const fetchedItems = await fetch(`/api/${category}`, {
      cache: "force-cache",
    });
    return fetchedItems.json();
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();

      setItemList(response);
    };
    fetchData();
  }, [getData]);

  return (
    <div className="static flex flex-col py-10 gap-5 from-cyan-700 to-sky-700 bg-gradient-to-r items-center justify-center w-full h-full">
      <div className="flex flex- row text-xl text-neutral-200 tracking-wide">
        <IonIcon icon={callOutline} size="medium" color="light" className="pt-1 px-1"/>
        6741 3905
      </div>

      {itemList.map((item) => (
        <MobileMenuItem
          alphabet={item.item_alphabet}
          name={item.item_name}
          englishName={item.item_english}
          price={item.item_price}
        />
      ))}
    </div>
  );
}
