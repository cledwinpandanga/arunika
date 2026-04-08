"use client";

import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/stateful-button";
import { action, biru, hijau, orange } from "@/lib/assets";
import { toCurrency } from "@/lib/utils";
import { IconBrandInstagram } from "@tabler/icons-react";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import { useState } from "react";

export default function Home() {
  const renderNavbar = () => {
    const navItems = [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Features",
        link: "#features",
      },
      {
        name: "Pricing",
        link: "#pricing",
      },
      {
        name: "Contact",
        link: "#contact",
      },
      {
        name: "About",
        link: "#about",
      },
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <div className="fixed w-full z-10">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton
              variant="primary"
              href="https://wa.me/6282147060726?text=Hi%20Min%21%20Saya%20mau%20booking%20nih%21"
              target="blank"
              rel="noopener"
            >
              Book a call
            </NavbarButton>
          </NavBody>
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                  href="https://wa.me/6282147060726?text=Hi%20Min%21%20Saya%20mau%20booking%20nih%21"
                  target="blank"
                  rel="noopener"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    );
  };

  const renderHero = () => {
    return (
      <div
        className="w-full min-h-[calc(100vh-54px)] h-full flex flex-col gap-4 lg:flex-row relative"
        id="home"
      >
        <Image
          width={800}
          height={800}
          src={"/orange1.jpg"}
          alt=""
          fetchPriority="high"
          loading="lazy"
          className="lg:block lg:absolute -top-13.5 lg:right-0 h-140 lg:h-[calc(100dvh-54px)] -z-10 w-full lg:w-140 "
        />
        <div className="lg:w-1/2 2/3 h-full my-auto text-wrap break-all flex flex-col items-center lg:items-start">
          <h1 className="text-7xl lg:text-8xl font-bold font-playfair">
            Ruang
          </h1>
          <p className="text-7xl lg:text-8xl font-bold font-playfair">
            Arunika
          </p>
          <p className="text-2xl font-semibold mt-8 font-playfair">
            East Sumba, Indonesia
          </p>
          <Link
            href="https://wa.me/6282147060726?text=Hi%20Min%21%20Saya%20mau%20booking%20nih%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="rounded-none mt-4 bg-black hover:ring-black p-4 w-1/2">
              CONTACT US
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 1/3 h-full" />
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div
        className="w-full min-h-[80dvh] h-full flex flex-col lg:flex-row gap-20 lg:gap-0 lg:items-center"
        id="about"
      >
        <div className="w-full lg:w-1/2 h-full">
          <Image
            width={800}
            height={800}
            src={"/orange3.jpg"}
            alt=""
            className="w-full lg:w-110 h-full lg:h-160"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-6xl font-bold font-playfair">About Us</h1>
          <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-black" />
          <p className="text-2xl mt-8 font-playfair text-center">
            "Photography is an itch that won't go away. No matter how much you
            scratch it." <br />~ Dara McGrath
          </p>
          <p className="text-lg mt-8 lg:text-justify">
            We specialize in creating stunning visuals that resonate emotionally
            and creatively. Whether it's through the lens of a camera or the
            framing of a cinematic shot. We strive to bring authenticity and
            artistry to every project.
          </p>
          <a href="#features" className="w-full">
            <Button className="rounded-none mt-4 bg-black hover:ring-black p-4 w-full lg:w-1/2">
              View Our Ideas
            </Button>
          </a>
        </div>
      </div>
    );
  };

  const renderPortfolio = () => {
    const firstGrid = hijau
      .filter((eachImg) => eachImg.key < 6)
      .map((eachImage) => eachImage);

    const secondGrid = orange.map((eachImage) => eachImage);
    const thirdGrid = biru.map((eachImage) => eachImage);
    const fourthGrid = action
      .filter((eachImg) => eachImg.key <= 2)
      .map((eachImage) => eachImage);

    return (
      <div className="w-full h-full flex flex-col py-20" id="features">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-6xl font-bold font-playfair">Our Ideas</h1>
          <div className="w-full lg:w-1/6 mt-4 pt-0.5 bg-black" />
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <div className="flex flex-col gap-4 col-span-1 drop-shadow-2xl">
            {firstGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <Image
                    width={800}
                    height={800}
                    src={eachImage.src}
                    alt={eachImage.src}
                    className="w-full lg:w-120 h-auto"
                  />
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
                  <Image
                    width={800}
                    height={800}
                    src={eachImage.src}
                    alt={eachImage.src}
                    className="w-full lg:w-120 h-auto"
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            {thirdGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <Image
                    width={800}
                    height={800}
                    src={eachImage.src}
                    alt={eachImage.src}
                    className="w-full lg:w-120 h-auto"
                  />
                </Link>
              );
            })}
            {fourthGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <Image
                    width={800}
                    height={800}
                    src={eachImage.src}
                    alt={eachImage.src}
                    className="w-full lg:w-120 h-fit"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderPricing = () => {
    const pricing = [
      {
        text: "Basic Plan",
        color: "white",
        price: 1000000,
        subtitle: "Includes RAW + 20 Edited Pictures",
        features: [
          { icon: "yes", text: "Duration: 1 hour" },
          { icon: "no", text: "Duration: 2-3 hours" },
          { icon: "no", text: "Duration: Half-day (4-5 hours)" },
          { icon: "yes", text: "Locations: 1" },
          { icon: "no", text: "Locations: Up to 2" },
          { icon: "no", text: "Locations: Multiple (up to 3)" },
        ],
      },
      {
        text: "Standard Plan",
        color: "black",
        price: 2000000,
        subtitle: "Includes RAW + 50 Edited Pictures",
        tag: "Popular Choice",
        features: [
          { icon: "no", text: "Duration: 1 hour" },
          { icon: "yes", text: "Duration: 2-3 hours" },
          { icon: "no", text: "Duration: Half-day (4-5 hours)" },
          { icon: "no", text: "Locations: 1" },
          { icon: "yes", text: "Locations: Up to 2" },
          { icon: "no", text: "Locations: Multiple (up to 3)" },
        ],
      },
      {
        text: "Premium Plan",
        color: "white",
        price: 3500000,
        subtitle: "Includes RAW + 100 Edited Pictures",
        features: [
          { icon: "no", text: "Duration: 1 hour" },
          { icon: "no", text: "Duration: 2-3 hours" },
          { icon: "yes", text: "Duration: Half-day (4-5 hours)" },
          { icon: "no", text: "Locations: 1" },
          { icon: "no", text: "Locations: Up to 2" },
          { icon: "yes", text: "Locations: Multiple (up to 3)" },
        ],
      },
    ];

    return (
      <div
        className="w-full h-full flex flex-col items-center mb-40"
        id="pricing"
      >
        <h1 className="text-6xl font-bold font-playfair">Pricing</h1>
        <div className="w-full lg:w-1/8 mb-20 mt-2 pt-0.5 bg-black" />
        <div className="w-full overflow-x-auto overflow-y-hidden p-4">
          <div className="grid grid-cols-3 gap-4 min-w-270">
            {pricing.map((eachPricing) => {
              const { color, price, text, subtitle, features, tag } =
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
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <>
        <div
          className="bg-black text-white w-full h-full p-8 min-h-160 relative mt-80"
          id="contact"
        >
          <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="w-full lg:w-2/3 h-full grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h1 className="text-2xl font-bold font-playfair">
                  Get In Touch
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <p className="text-lg mt-8 lg:text-justify">
                  Reach out for inquiries, collaborations, or just to say
                  hello—I'd love to connect with you.
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold font-playfair">
                  Where's the Office?
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <p className="text-lg mt-8 lg:text-justify">
                  Jl. Umbu Ndau Manu, Kampung Got
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold font-playfair">
                  Connect With Us
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <Link href={"https://www.instagram.com/ruang.arunika_/"}>
                  <IconBrandInstagram className="size-10 mt-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3 h-full absolute right-0 -top-32">
              <Image
                width={800}
                height={800}
                src={"/hijau6.jpg"}
                alt=""
                className="w-full h-full min-h-192 min-w-105 rounded-tl-4xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-amber-500 text-white text-center font-sans">
          Copyright © 2026 Ruang Arunika. All rights reserved.
        </div>
      </>
    );
  };

  const renderMainSection = () => {
    return (
      <div className="w-full h-full">
        {renderNavbar()}
        <LayoutWrapper>
          {renderHero()}
          {renderAbout()}
          {renderPortfolio()}
          {renderPricing()}
        </LayoutWrapper>
        {renderFooter()}
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
}: {
  tag?: string;
  text: string;
  subtitle: string;
  price: number;
  color: string;
  features: { icon: string; text: string }[];
}) => {
  return (
    <div
      className={`col-span-1 border px-4 py-8 h-full w-full text-center text-${color === "white" ? "black" : "white"} bg-${color} rounded-2xl relative flex flex-col items-start gap-2`}
    >
      <p className={`text-xl font-semibold my-8`}>{text}</p>
      {tag && (
        <div className="w-fit h-auto p-2 bg-linear-to-r from-amber-600 to-amber-400 rounded-xl absolute -top-4 right-10 z-0 text-sm">
          {tag}
        </div>
      )}
      <h1 className={`text-4xl font-bold font-sans text-center`}>
        IDR {toCurrency(price)}
      </h1>
      <p className={`text-base`}>{subtitle}</p>
      <Button
        className={`${
          color === "black"
            ? "bg-white text-black hover:ring-none"
            : "bg-black text-white hover:ring-none"
        } w-full my-4`}
      >
        Book Now
      </Button>
      <hr className="w-full mb-4" />
      <p className={`text-base font-semibold`}>Features</p>
      <div className="mt-4 w-full">
        {features?.map((eachFeatures, index) => {
          return (
            <div
              key={index}
              className="w-full flex gap-2 items-start justify-start h-fit py-1"
            >
              {eachFeatures.icon === "yes" ? (
                <CheckCircleIcon className="size-4 text-white bg-green-800 rounded-full mt-0.5" />
              ) : (
                <XCircleIcon className="size-4 bg-zinc-600 text-white rounded-full mt-0.5" />
              )}
              <p className="text-start text-sm">{eachFeatures.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
