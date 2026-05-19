import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface TranslateButtonProps {
  locale: string;
}
export default function TranslateButton({ locale }: TranslateButtonProps) {
  const pathname = usePathname();

  const isEnglish = locale === "en";

  const handleChangeLanguage = () => {
    const nextLocale = isEnglish ? "id" : "en";

    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "id") {
      segments.shift();
    }

    const newPath = `/${nextLocale}/${segments.join("/")}`;
    window.location.replace(newPath);
  };

  const flag = isEnglish
    ? "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg"
    : "https://static.vecteezy.com/system/resources/thumbnails/016/328/946/small/indonesia-flat-rounded-flag-with-transparent-background-free-png.png";

  return (
    <Image
      alt="language switch"
      width={1000}
      height={1000}
      src={flag}
      className={`size-20 rounded-full fixed bottom-8 right-8 drop-shadow-2xl ${
        isEnglish ? "p-1.5" : ""
      } cursor-pointer`}
      onClick={handleChangeLanguage}
    />
  );
}
