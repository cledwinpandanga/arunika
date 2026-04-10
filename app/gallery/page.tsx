"use client";

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
import { navItems } from "../page";
import { useState } from "react";
import { IconBrandInstagram } from "@tabler/icons-react";
import TransitionWrapper from "@/components/TransitionWrapper/TransitionWrapper";
import { hijau, orange, biru, action, bnw } from "@/lib/assets";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Gallery() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const newNavItems = navItems.map((eachNav) => {
    let link = ``;
    if (pathname === eachNav.link) {
      link = `${eachNav.link}`;
    } else link = `/${eachNav.link}`;

    return {
      ...eachNav,
      link,
    };
  });

  const renderNavbar = () => {
    return (
      <div className="fixed w-full z-10">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={newNavItems} />
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
              {newNavItems.map((item, idx) => (
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

  const renderFooter = () => {
    return (
      <>
        <div className="bg-black text-white w-full h-full p-8 relative mt-80">
          <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="w-full lg:w-2/3 min-h-full grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h1 className="text-2xl font-bold font-playfair">
                  Get In Touch
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <p className="text-lg mt-8 lg:text-justify">
                  Reach out for inquiries, collaborations, or just to say
                  hello—I'd love to connect with you.
                </p>
              </div>
              <div className="col-span-1">
                <h1 className="text-2xl font-bold font-playfair">
                  Where's the Office?
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <p className="text-lg mt-8 lg:text-justify">
                  Jl. Umbu Ndau Manu, Kampung Got
                </p>
              </div>
              <div className="col-span-1">
                <h1 className="text-2xl font-bold font-playfair">
                  Connect With Us
                </h1>
                <div className="w-full lg:w-1/3 mt-4 pt-0.5 bg-white" />
                <Link href={"https://www.instagram.com/ruang.arunika_/"}>
                  <IconBrandInstagram className="size-10 mt-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3 h-full absolute right-0 -top-30">
              <Image
                width={800}
                height={800}
                src={"/orange5.jpg"}
                alt=""
                className="h-122 w-90 rounded-t-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-zinc-200 text-black text-center font-sans">
          Copyright © 2026 Ruang Arunika. All rights reserved.
        </div>
      </>
    );
  };

  const renderPortfolio = () => {
    const firstGrid = hijau
      .filter((eachImg) => eachImg.key < 6)
      .map((eachImage) => eachImage);

    const secondGrid = orange.map((eachImage) => eachImage);
    const thirdGrid = biru.map((eachImage) => eachImage);
    const fourthGrid = bnw.map((eachImage) => eachImage);
    const fifthGrid = action.map((eachImage) => eachImage);

    return (
      <div className="w-full h-full flex flex-col p-20" id="features">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-6xl font-bold font-playfair">Our Ideas</h1>
          <div className="w-full lg:w-1/6 mt-4 pt-0.5 bg-black" />
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-30">
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
                  <TransitionWrapper animateFrom="bottom" duration={4}>
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
          <div className="flex flex-col gap-4 col-span-1">
            {fifthGrid.map((eachImage) => {
              return (
                <Link
                  target="blank"
                  rel="noopener"
                  href={eachImage.coordinate}
                  key={eachImage.key}
                >
                  <TransitionWrapper animateFrom="bottom" duration={5}>
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
  return (
    <div className="w-full h-full">
      {renderNavbar()}
      {renderPortfolio()}
      {renderFooter()}
    </div>
  );
}
