"use client";

import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import TransitionWrapper from "@/components/TransitionWrapper/TransitionWrapper";
import { Button } from "@/components/ui/stateful-button";
import { biru, bnw, hijau, orange } from "@/lib/assets";
import { getMessage, toCurrency } from "@/lib/utils";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import NavbarComponent from "@/components/Navbar/Navbar";
import { useLocale, useTranslations } from "next-intl";
import Footer from "@/components/Footer/Footer";
import TranslateButton from "@/components/TranslateButton/TranslateButton";

interface EmailProps {
  name: string;
  email: string;
  text: string;
}

export default function Home() {
  const locale = useLocale();

  const [email, setEmail] = useState<EmailProps>({
    email: "",
    text: "",
    name: "",
  });

  const handleUpdateEmail =
    (type: "email" | "text" | "name") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setEmail((prev: any) => ({
        ...prev,
        [type]: value,
      }));
    };

  const handleSendEmail = () => {
    toast.success("Email sent.");
    const subject = "Booking";
    const body = `Hi team Ruang Arunika! Saya,
    Nama: ${email.name}
    Email: ${email.email}
    Pesan: ${email.text}`;
    const mailtoLink = `mailto:ruangarunika@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setEmail({ name: "", email: "", text: "" });
  };

  const renderHero = () => {
    const t = useTranslations("hero");
    return (
      <div
        className="w-full h-full lg:h-[calc(100vh-54px)] flex flex-col gap-4 lg:flex-row relative"
        id="home"
      >
        <Image
          width={800}
          height={800}
          src={"/orange1.jpg"}
          alt=""
          fetchPriority="high"
          loading="lazy"
          className="absolute -top-13.5 lg:right-0 h-120 lg:h-[calc(100dvh-54px)] -z-10 w-full lg:w-138"
        />
        <TransitionWrapper
          className="w-full order-1 lg:order-0 lg:w-1/2 min-h-full text-wrap break-all flex flex-col justify-center items-center lg:items-start"
          animateFrom="bottom"
          duration={1.5}
        >
          <h1 className="text-7xl lg:text-8xl font-bold font-playfair">
            Ruang
          </h1>
          <p className="text-7xl lg:text-8xl font-bold font-playfair">
            Arunika
          </p>
          <p className="text-2xl font-semibold mt-8 font-playfair">
            Sumba, Indonesia
          </p>
          <Link
            href="https://wa.me/6282147060726?text=Hi%20Min%21%20Saya%20mau%20booking%20nih%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="rounded-none mt-4 bg-black hover:ring-black p-4 w-full lg:w-1/2 uppercase">
              {t("button")}
            </Button>
          </Link>
        </TransitionWrapper>
        <div className="w-full h-full min-h-120 order-0 lg:order-1 lg:w-1/2 " />
      </div>
    );
  };

  const renderAbout = () => {
    const t = useTranslations("about");
    return (
      <div
        className="w-full min-h-[80dvh] h-full flex flex-col lg:flex-row gap-20 lg:gap-0 lg:items-center"
        id="about"
      >
        <TransitionWrapper
          animateFrom="left"
          duration={1.5}
          className="w-full lg:w-1/2 h-full"
        >
          <Image
            width={800}
            height={800}
            src={"/orange6.jpg"}
            alt=""
            className="w-full lg:w-110 h-full lg:h-160"
          />
        </TransitionWrapper>
        <TransitionWrapper
          animateFrom="right"
          duration={1.5}
          className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start lg:justify-center"
        >
          <h1 className="text-6xl font-bold font-playfair">{t("title")}</h1>
          <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-black" />
          <p className="text-2xl mt-8 font-playfair text-center">
            {t("quote")} <br />~ Dara McGrath
          </p>
          <p className="text-lg mt-8 lg:text-justify">{t("subtitle")}</p>
          <Link href="#features" className="w-full">
            <Button className="rounded-none mt-4 bg-black hover:ring-black p-4 w-full lg:w-1/2">
              {t("button")}
            </Button>
          </Link>
        </TransitionWrapper>
      </div>
    );
  };

  const renderPortfolio = () => {
    const t = useTranslations("features");

    const firstGrid = hijau
      .filter((eachImg) => eachImg.key <= 7)
      .map((eachImage) => eachImage);

    const secondGrid = orange.map((eachImage) => eachImage);
    const thirdGrid = biru.map((eachImage) => eachImage);
    const fourthGrid = bnw.map((eachImage) => eachImage);

    return (
      <div className="w-full h-full flex flex-col py-20" id="features">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-6xl font-bold font-playfair">{t("title")}</h1>
          <div className="w-full lg:w-1/6 mt-4 pt-0.5 bg-black" />
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-30">
          <div className="flex flex-col gap-4 col-span-1 drop-shadow-2xl">
            {firstGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <TransitionWrapper animateFrom="bottom" duration={1.5}>
                    <Image
                      width={800}
                      height={800}
                      src={eachImage.src}
                      alt={eachImage.src}
                      className="w-full lg:w-120 h-auto"
                    />
                  </TransitionWrapper>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            {secondGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <TransitionWrapper animateFrom="bottom" duration={2}>
                    <Image
                      width={800}
                      height={800}
                      src={eachImage.src}
                      alt={eachImage.src}
                      className="w-full lg:w-120 h-auto"
                    />
                  </TransitionWrapper>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            {thirdGrid
              .filter((eachImg) => eachImg.src !== "/biru2.jpg")
              .map((eachImage) => {
                return (
                  <Link
                    target="blank"
                    rel="noopener"
                    href={eachImage.coordinate}
                    key={eachImage.key}
                  >
                    <TransitionWrapper animateFrom="bottom" duration={3}>
                      <Image
                        width={800}
                        height={800}
                        src={eachImage.src}
                        alt={eachImage.src}
                        className="w-full lg:w-120 h-auto"
                      />
                    </TransitionWrapper>
                  </Link>
                );
              })}
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            {fourthGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <TransitionWrapper animateFrom="bottom" duration={3}>
                    <Image
                      width={800}
                      height={800}
                      src={eachImage.src}
                      alt={eachImage.src}
                      className="w-full lg:w-120 h-fit"
                    />
                  </TransitionWrapper>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderPricing = () => {
    const t = useTranslations("pricing");
    const pricing = [
      {
        text: t("basic_title"),
        color: "white",
        price: 500000,
        subtitle: t("basic_subtitle"),
        features: t.raw("basic_features").map((item: string) => ({
          icon: "yes",
          text: item,
        })),
        bookType: "basic",
      },
      {
        text: t("standard_title"),
        color: "black",
        price: 800000,
        subtitle: t("standard_subtitle"),
        tag: t("standard_tag"),
        features: t.raw("standard_features").map((item: string) => ({
          icon: "yes",
          text: item,
        })),
        bookType: "standard",
      },
      {
        text: t("premium_title"),
        color: "white",
        price: 1200000,
        subtitle: t("premium_subtitle"),
        features: t.raw("premium_features").map((item: string) => ({
          icon: "yes",
          text: item,
        })),
        bookType: "premium",
      },
    ];

    return (
      <div
        className="w-full h-full flex flex-col items-center mb-40"
        id="pricing"
      >
        <h1 className="text-6xl font-bold font-playfair">{t("title")}</h1>
        <div className="w-full lg:w-1/8 mb-20 mt-2 pt-0.5 bg-black" />
        <div className="w-full overflow-x-auto overflow-y-hidden p-4">
          <div className="grid grid-cols-3 gap-4 min-w-270">
            {pricing.map((eachPricing) => {
              const { color, price, text, subtitle, features, tag, bookType } =
                eachPricing;
              return (
                <div key={price} className="w-full">
                  {renderPricingCard({
                    color,
                    price,
                    subtitle,
                    text,
                    tag,
                    features,
                    bookType,
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Link
          href={"/price-list/ruang-arunika-price-list.pdf"}
          className="w-full h-full"
          rel="noopener"
          target="blank"
        >
          <Button className="mt-20 w-full bg-black rounded-none hover:ring-none">
            View PDF
          </Button>
        </Link>
      </div>
    );
  };

  const renderCTA = () => {
    const t = useTranslations("contact");
    return (
      <div className="w-full h-full bg-zinc-100" id="contact">
        <div className="w-full max-w-6xl mx-auto p-8">
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold font-playfair">{t("title")}</h1>
              <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-black" />
              <p className="text-lg mt-8">{t("subtitle")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  className="w-full h-10 p-2 border-b border-black hover:outline-none focus:outline-none mt-4"
                  placeholder={t("name")}
                  type="text"
                  value={email?.name}
                  onChange={handleUpdateEmail("name")}
                />
                <input
                  className="w-full h-10 p-2 border-b border-black hover:outline-none focus:outline-none mt-4"
                  placeholder={t("email")}
                  type="email"
                  value={email?.email}
                  onChange={handleUpdateEmail("email")}
                />
                <input
                  className="w-full h-10 p-2 border-b border-black hover:outline-none focus:outline-none mt-4"
                  placeholder={t("message")}
                  type="text"
                  value={email?.text}
                  onChange={handleUpdateEmail("text")}
                />
              </div>
              <Button
                onClick={handleSendEmail}
                disabled={!email.email || !email.name || !email.text}
                className="rounded-none mt-8 bg-black hover:ring-black p-4 w-full "
              >
                {t("button")}
              </Button>
            </div>
            <Image
              width={800}
              height={800}
              src={"/action1.jpg"}
              alt=""
              className="h-140 w-full hidden sm:block"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderMainSection = () => {
    return (
      <div className="w-full h-full overflow-hidden relative">
        <Toaster />
        <NavbarComponent />
        <LayoutWrapper>
          {renderHero()}
          {renderAbout()}
          {renderPortfolio()}
          {renderPricing()}
        </LayoutWrapper>
        {renderCTA()}
        <Footer />
        <TranslateButton locale={locale} />
      </div>
    );
  };

  return renderMainSection();
}

const renderPricingCard = ({
  tag,
  text,
  subtitle,
  price,
  color,
  features,
  bookType,
}: {
  tag?: string;
  text: string;
  subtitle: string;
  price: number;
  color: string;
  features: { icon: string; text: string }[];
  bookType: string;
}) => {
  const t = useTranslations("pricing");
  const waLink = `https://wa.me/6282147060726?text=${encodeURIComponent(getMessage(bookType))}`;

  return (
    <div
      className={`drop-shadow-none
  hover:drop-shadow-[0_10px_15px_rgba(251,191,36,0.5)]
  transition-all duration-300 col-span-1 border px-4 py-8 h-full w-full text-center text-${color === "white" ? "black" : "white"} bg-${color} rounded-2xl relative flex flex-col items-start gap-2`}
    >
      <p className={`text-xl font-semibold my-8`}>{text}</p>
      {tag && (
        <div className="w-fit h-auto p-2 bg-linear-to-r from-amber-600 via-amber-500 to-amber-400 rounded-xl absolute -top-4 right-10 z-0 text-sm">
          {tag}
        </div>
      )}
      <h1 className={`text-4xl font-bold font-sans text-center`}>
        IDR {toCurrency(price)}
      </h1>
      <p className={`text-base text-start`}>{subtitle}</p>
      <Link href={waLink} rel="noopener" target="blank" className="w-full">
        <Button
          className={`${
            color === "black"
              ? "bg-white text-black hover:ring-none"
              : "bg-black text-white hover:ring-none"
          } w-full my-4`}
        >
          {t("button")}
        </Button>
      </Link>
      <hr className="w-full mb-4" />
      <p className={`text-base font-semibold`}>Features</p>
      <div className="mt-4 w-full">
        {features?.map((eachFeatures, index) => {
          return (
            <div
              key={index}
              className="w-full flex gap-2 items-start justify-start h-fit py-1"
            >
              <CheckCircleIcon className="size-4 text-white bg-green-800 rounded-full mt-0.5" />
              {/* {eachFeatures.icon === "yes" ? (
              ) : (
                <XCircleIcon className="size-4 bg-zinc-600 text-white rounded-full mt-0.5" />
              )} */}
              <p className="text-start text-sm">{eachFeatures.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
