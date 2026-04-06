"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const renderHeroSection = () => {
    return (
      <section className="relative w-full h-screen overflow-hidden text-white">
        <Image
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero background"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-20 p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-start lg:items-end"
          >
            <p className="text-6xl lg:text-8xl mt-40">
              Alan <br />
              Anapaku
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full flex flex-col gap-6 lg:gap-20 justify-start lg:justify-end items-end lg:items-start pb-0 lg:pb-40"
          >
            <p className="text-2xl lg:text-4xl text-end lg:text-start">
              Landscape & Travel <br />
              Photographer
            </p>
            <Link
              href="/"
              className="px-8 py-2 border-white rounded-full border hover:bg-white/20"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>
        <Image
          src="/logo-arunika.png"
          alt="Logo Arunika"
          height={200}
          width={200}
          priority
          className="object-cover z-10 size-10 lg:size-20 absolute top-10 left-8 rounded-full"
        />
      </section>
    );
  };

  const renderAboutSection = () => {
    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col lg:flex-row gap-8 items-center bg-stone-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center gap-20"
        >
          <p className="text-4xl lg:text-6xl">Hi, it's Alan</p>
          <p className="text-4xl">
            I'm a landscape and travel photographer, specializing in capturing
            the nuances of different seasons.
          </p>
          <p className="text-4xl">
            I've traveled extensively, photographing the world's most
            breathtaking views.
          </p>
        </motion.div>
        <div className="w-full h-full flex flex-col justify-center">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1686701888003-e620b3a4824c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About background"
            className="object-cover w-full max-h-1/3"
          />
        </div>
      </div>
    );
  };

  const renderFirstPortfolio = () => {
    const images = [
      {
        key: 1,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610960603-08b063781ced?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        key: 2,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1618479357286-1288df6ec815?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        key: 3,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610959831-aa4190402a2b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col justify-center bg-white text-black">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold"
        >
          The Summer Exhibit
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col lg:flex-row justify-center gap-10 mt-20"
        >
          {images.map((eachImage) => {
            return (
              <div className="flex flex-col gap-2" key={eachImage.key}>
                <Image
                  width={1000}
                  height={1000}
                  src={eachImage.src}
                  alt="About background"
                  className="object-cover"
                />
                <p className="text-2xl font-bold mt-10">{eachImage.text}</p>
                <p className="text-xl">{eachImage.subtitle}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  const renderSecondPortfolio = () => {
    const images = [
      {
        key: 1,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610960603-08b063781ced?q=80&w=987&auto=format&fit=crop",
      },
      {
        key: 2,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1618479357286-1288df6ec815?q=80&w=987&auto=format&fit=crop",
      },
      {
        key: 3,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610959831-aa4190402a2b?q=80&w=987&auto=format&fit=crop",
      },
    ];

    return (
      <div className="w-full min-h-screen py-40 px-8 flex flex-col justify-center bg-stone-800 text-white">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold"
        >
          The Summer Exhibit
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20"
        >
          {images.map((eachImage) => (
            <div
              key={eachImage.key}
              className={`w-full min-h-160 ${
                eachImage.key === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                width={1000}
                height={1000}
                src={eachImage.src}
                alt="About background"
                className="object-cover h-100 w-full"
              />
              <p className="text-2xl font-bold mt-10">{eachImage.text}</p>
              <p className="text-xl">{eachImage.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const renderThirdPortfolio = () => {
    const images = [
      {
        key: 1,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610960603-08b063781ced?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        key: 2,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1618479357286-1288df6ec815?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        key: 3,
        text: "Icy Scrubs",
        subtitle: "Icy scrubs is not applicabel to your wounded leg",
        src: "https://images.unsplash.com/photo-1683610959831-aa4190402a2b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col justify-center bg-white text-black">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold"
        >
          The Summer Exhibit
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col lg:flex-row justify-center gap-10 mt-20"
        >
          {images.map((eachImage) => {
            return (
              <div className="flex flex-col gap-2" key={eachImage.key}>
                <Image
                  width={1000}
                  height={1000}
                  src={eachImage.src}
                  alt="About background"
                  className="object-cover"
                />
                <p className="text-2xl font-bold mt-10">{eachImage.text}</p>
                <p className="text-xl">{eachImage.subtitle}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className="w-full h-220 bg-white flex flex-col lg:flex-row">
        <div className="w-full h-full bg-stone-800 flex flex-col justify-center gap-20 p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4 items-start"
          >
            <p className="text-white text-2xl lg:text-4xl text-end lg:text-start">
              Feature My Work
            </p>
            <Link
              href="/"
              className="px-8 py-2 border-white rounded-full border hover:bg-white w-full lg:w-1/3 text-center hover:text-black text-white"
            >
              Contact Me
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-start lg:justify-start justify-start items-end gap-4"
          >
            <div>
              <Image
                src="/logo-arunika.png"
                alt="Logo Arunika"
                height={200}
                width={200}
                priority
                className="object-cover size-20 rounded-full"
              />
            </div>
            <div>
              <p className="text-white text-2xl lg:text-4xl text-end lg:text-start">
                www.ruangarunika.id
              </p>
              <p className="text-white text-2xl text-end lg:text-start">
                +62 821-4706-0726
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full hidden lg:block">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1590324571844-dd64c19c2ded?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About background"
            className="object-cover w-full h-220"
          />
        </div>
      </div>
    );
  };

  const renderLoader = () => {
    const words = [{ text: "Ruang" }, { text: "Arunika" }];
    return (
      <div className="w-full h-screen bg-white">
        <div className="w-full flex h-full justify-center items-center gap-4">
          <Image
            src="/logo-arunika.png"
            alt="Logo Arunika"
            height={200}
            width={200}
            priority
            className="rounded-full size-20 animate-bounce"
          />
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
    );
  };

  const renderMainSection = () => {
    return loading ? (
      renderLoader()
    ) : (
      <div className="w-full h-full">
        {renderHeroSection()}
        {renderAboutSection()}
        {renderFirstPortfolio()}
        {renderSecondPortfolio()}
        {renderThirdPortfolio()}
        {renderFooter()}
      </div>
    );
  };

  return renderMainSection();
}
