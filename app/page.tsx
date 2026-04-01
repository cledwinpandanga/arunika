"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const renderHeroSection = () => {
    return (
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero background"
          fill
          priority
          className="object-cover -z-10"
        />

        <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-20 p-8">
          <div className="w-full h-full flex flex-col justify-start">
            <p className="text-white text-6xl lg:text-8xl mt-40 ">
              Alan <br />
              Anapaku
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-6 lg:gap-20 justify-start lg:justify-end items-end lg:items-start pb-0 lg:pb-40">
            <p className="text-white text-2xl lg:text-4xl text-end lg:text-start">
              Landscape & Travel <br />
              Photographer
            </p>
            <Link
              href="/"
              className="px-8 py-2 border-white rounded-full border hover:bg-white/20"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const renderAboutSection = () => {
    return (
      <div className="w-full h-full min-h-screen relative py-40 px-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full h-full flex flex-col justify-center gap-20">
          <p className="text-4xl lg:text-6xl">Hi, it's Alan</p>
          <p className="text-4xl">
            I'm a landscape and travel photographer, specializing in capturing
            the nuances of different seasons.
          </p>
          <p className="text-4xl">
            I've traveled extensively, photographing the world's most
            breathtaking views.
          </p>
        </div>
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
        <p className="text-4xl lg:text-6xl text-center font-bold">
          The Summer Exhibit
        </p>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-10 mt-20">
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
        </div>
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
      <div className="w-full min-h-screen py-40 px-8 flex flex-col justify-center bg-black text-white">
        <p className="text-4xl lg:text-6xl text-center font-bold">
          The Summer Exhibit
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
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
        </div>
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
        <p className="text-4xl lg:text-6xl text-center font-bold">
          The Summer Exhibit
        </p>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-10 mt-20">
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
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className="w-full h-220 bg-white flex flex-col lg:flex-row">
        <div className="w-full h-full bg-black flex flex-col justify-center gap-20 p-8">
          <div className="flex flex-col gap-4 items-start">
            <p className="text-white text-2xl lg:text-4xl text-end lg:text-start">
              Feature My Work
            </p>
            <Link
              href="/"
              className="px-8 py-2 border-white rounded-full border hover:bg-white w-full lg:w-1/3 text-center hover:text-black text-white"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-white text-2xl lg:text-4xl text-end lg:text-start">
              www.ruangarunika.id
            </p>
            <p className="text-white text-2xl text-end lg:text-start">
              +62 821-4706-0726
            </p>
          </div>
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

  const renderMainSection = () => {
    return (
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
