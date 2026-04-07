"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { biru, orange, hijau, action, ImageProps } from "@/lib/assets";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const renderHeroSection = () => {
    return (
      <section className="relative w-full h-screen overflow-hidden text-white bg-black/20">
        <Image
          src={hijau[1].src}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-10 p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-start lg:items-center"
          >
            <p className="text-6xl lg:text-8xl mt-40">
              Ruang <br />
              Arunika
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full flex flex-col gap-6 lg:gap-20 justify-start lg:justify-center items-end lg:items-start pb-0"
          >
            <p className="text-2xl lg:text-4xl text-end lg:text-start pr-20">
              {`"Photography is an itch that won't go away. No matter how much you
              scratch it."`}
              <br />
              {`~ Dara McGrath`}
            </p>
            <Link
              target="blank"
              href={`https://api.whatsapp.com/send?phone=+6282147060726?text="Alan lau"`}
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
          fetchPriority="high"
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
          <p className="text-4xl">
            "Ruang Arunika is a creative collective and entity centered on
            Visual Storytelling. We go beyond simply capturing images; we weave
            narratives through visual elements, transforming fleeting moments
            into timeless stories."
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <Image
            width={1000}
            height={1000}
            src={hijau[6].src}
            alt="About background"
            className="object-cover w-full max-h-1/3"
          />
        </motion.div>
      </div>
    );
  };

  const renderFirstPortfolio = () => {
    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col justify-center bg-white text-black">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold text-stone-700"
        >
          The Solitary Soul
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-4 mt-20"
        >
          {hijau.map((eachImage) => (
            <div
              className="flex flex-col gap-2 col-span-1 drop-shadow-stone-300 drop-shadow-2xl"
              key={eachImage.key}
            >
              <div className="w-full h-full min-h-120 overflow-hidden relative">
                <Image
                  src={eachImage.src}
                  alt="About background"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-2xl font-bold mt-4">{eachImage.text}</p>
              <p className="text-xl">{eachImage.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const renderSecondPortfolio = () => {
    return (
      <div className="w-full min-h-screen py-40 px-8 flex flex-col justify-center bg-stone-800 text-white">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold"
        >
          The Shared Chapter
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20"
        >
          {orange.map((eachImage) => (
            <div key={eachImage.key} className={`w-full min-h-160 `}>
              <Image
                width={1000}
                height={1000}
                src={eachImage.src}
                alt="About background"
                className="object-cover h-160 w-full"
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
    const combinedPic: ImageProps[] = [];
    action.forEach((eachAction) => {
      combinedPic.push({
        key: eachAction.key === 1 ? 4 : eachAction.key + 3,
        src: eachAction.src,
        subtitle: eachAction.subtitle,
        text: eachAction.text,
      });
    });
    biru.forEach((eachBiru) => {
      combinedPic.push(eachBiru);
    });
    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col justify-center bg-white text-black">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl text-center font-bold"
        >
          The Grand Setting
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-4 mt-20"
        >
          {combinedPic.map((eachImage) => {
            return (
              <div
                className="flex flex-col gap-2 col-span-1 drop-shadow-stone-300 drop-shadow-2xl"
                key={eachImage.key}
              >
                <div className="w-full h-full min-h-120 overflow-hidden relative">
                  <Image
                    src={eachImage.src}
                    alt="About background"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-2xl font-bold mt-4">{eachImage.text}</p>
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
            src="/footer.jpg"
            fetchPriority="high"
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
            fetchPriority="high"
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
