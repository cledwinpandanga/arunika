"use client";

import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import TransitionWrapper from "@/components/TransitionWrapper/TransitionWrapper";
import { Button } from "@/components/ui/stateful-button";
import { biru, bnw, hijau, orange } from "@/lib/assets";
import { getMessage, toCurrency } from "@/lib/utils";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import NavbarComponent from "@/components/Navbar/Navbar";
import { useLocale, useTranslations } from "next-intl";
import Footer from "@/components/Footer/Footer";
import TranslateButton from "@/components/TranslateButton/TranslateButton";
import { useForm } from "react-hook-form";

interface EmailProps {
  name: string;
  email: string;
  text: string;
}

export default function Home() {
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    toast.success("Email sent.");
    const subject = "Booking";
    const body = `Hi team Ruang Arunika! Saya,
    Nama: ${data.name}
    Email: ${data.email}
    Pesan: ${data.text}`;
    const mailtoLink = `mailto:ruangarunika@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    reset();
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
          className="
              absolute -top-13.5 
              sm:left-1/2 sm:-translate-x-1/2 
              lg:right-0 lg:left-auto lg:translate-x-0
              h-120 sm:w-120 
              lg:h-[calc(100dvh-54px)] 
              -z-10 w-full lg:w-138
            "
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
            className="w-full h-fit"
          >
            <button className="cursor-pointer rounded-none mt-4 text-white bg-black hover:ring-black ring-1 p-4 w-full lg:w-1/2 uppercase">
              {t("button")}
            </button>
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
            <button className="text-white cursor-pointer rounded-none mt-4 bg-black hover:ring-black p-4 w-full lg:w-1/2">
              {t("button")}
            </button>
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
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-30">
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
    const pricing = t.raw("items");

    return (
      <div
        className="w-full h-full flex flex-col items-center mb-40"
        id="pricing"
      >
        <h1 className="text-6xl font-bold font-playfair">{t("title")}</h1>
        <div className="w-full lg:w-1/8 mb-20 mt-2 pt-0.5 bg-black" />
        <div className="w-full overflow-x-auto overflow-y-hidden p-4">
          <div className="flex gap-4 min-w-fit">
            {pricing.map((eachPricing: any, index: number) => {
              return (
                <div key={index} className="w-full min-w-86">
                  <PricingCard {...eachPricing} />
                </div>
              );
            })}
          </div>
        </div>

        <Link
          href={"/price-list/ruang-arunika-price-list.pdf"}
          className="w-full h-full"
          rel="noopener"
          target="_blank"
        >
          <Button className="mt-20 w-full bg-black rounded-none hover:ring-none">
            {t("viewPdf")}
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

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-6 mt-4"
              >
                <div>
                  <input
                    className="w-full h-10 p-2 border-b border-black focus:outline-none"
                    placeholder={t("name")}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name?.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    className="w-full h-10 p-2 border-b border-black focus:outline-none"
                    placeholder={t("email")}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email?.message as String}
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <textarea
                    className="w-full p-2 border-b border-black focus:outline-none"
                    placeholder={t("message")}
                    rows={4}
                    {...register("text", {
                      required: "Message is required",
                    })}
                  />
                  {errors.text && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.text.message as String}
                    </p>
                  )}
                </div>
              </form>
              <button
                type="submit"
                disabled={!isValid}
                className={`text-white rounded-none mt-4 ${!isValid ? "bg-black/60 cursor-not-allowed" : "bg-black"} p-4 w-full hover:ring-none`}
              >
                {t("button")}
              </button>
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

const PricingCard = ({
  title,
  imageUrl,
  bookType,
  plans,
}: {
  title: string;
  imageUrl: string;
  bookType: string;
  plans: {
    type: string;
    price: number;
    subtitle: string;
    tag?: string;
    features: string[];
  }[];
}) => {
  const t = useTranslations("pricing");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url("${imageUrl}")` }}
      className="group relative col-span-1 min-h-137.5 w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat border border-zinc-200/50"
    >
      {/* Center Title */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
        ${
          showDetails ? "opacity-0 pointer-events-none scale-90" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setShowDetails(true)}
          className="text-white font-playfair font-semibold text-4xl drop-shadow-2xl whitespace-nowrap"
        >
          {title.toUpperCase()}

          <span className="text-[10px] font-sans block md:hidden rounded-full bg-amber-600 mt-2 p-2">
            Click here to view details
          </span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`
        absolute inset-0 bg-black/90 backdrop-blur-xs p-6 transition-all duration-500 overflow-y-auto
        ${
          showDetails
            ? "opacity-100 visible"
            : "opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible"
        }
      `}
      >
        {/* Close Mobile */}
        <button
          type="button"
          onClick={() => setShowDetails(false)}
          className="absolute top-4 z-50 right-4 text-xs font-bold md:hidden border px-3 py-1.5 rounded-full border-white text-white"
        >
          ✕ Close
        </button>

        <div className="flex flex-col gap-8">
          {plans.map((plan, index) => {
            const waLink = `https://wa.me/6282147060726?text=${encodeURIComponent(
              getMessage(`${bookType}-${plan.type}`),
            )}`;

            return (
              <div key={index} className="rounded-2xl p-4">
                {/* Tag */}
                {plan.tag && (
                  <div className="w-fit mb-4 px-3 py-1 text-xs rounded-full bg-amber-500 text-black font-semibold">
                    {plan.tag}
                  </div>
                )}

                <p className="text-xl text-white font-semibold">{plan.type}</p>

                <h2 className="text-3xl text-white font-bold mt-2">
                  IDR {toCurrency(plan.price)}
                </h2>

                <p className="text-sm text-zinc-300 mt-2">{plan.subtitle}</p>

                <Link
                  href={waLink}
                  target="_blank"
                  rel="noopener"
                  className="block w-full"
                >
                  <button className="w-full bg-white text-black rounded-full p-2 mt-4 cursor-pointer hover:opacity-90">
                    {t("button")}
                  </button>
                </Link>

                <div className="mt-4 flex flex-col gap-2">
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <CheckCircleIcon className="size-4 text-white bg-green-700 rounded-full shrink-0 mt-0.5" />

                        <p className="text-sm text-white">{feature}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
