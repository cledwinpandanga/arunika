import { IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <>
      <div className="bg-black text-white w-full h-full p-8 lg:p-20 relative mt-80">
        <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-10 lg:items-center">
          <div className="w-full lg:w-2/3 min-h-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h1 className="text-2xl font-bold font-playfair">
                {t("title_1")}
              </h1>
              <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
              <p className="text-lg mt-8 lg:text-justify">{t("subtitle_1")}</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-2xl font-bold font-playfair">
                {t("title_2")}
              </h1>
              <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
              <Link href={"https://www.instagram.com/ruang.arunika_/"}>
                <IconBrandInstagram className="size-10 mt-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3 h-full absolute right-0 -top-21 drop-shadow-2xl">
            <Image
              width={800}
              height={800}
              src={"/orange5.jpg"}
              alt=""
              className="h-102 w-90 rounded-t-xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-zinc-200 text-black text-center font-sans">
        Copyright © 2026 Ruang Arunika. All rights reserved.
      </div>
    </>
  );
}
