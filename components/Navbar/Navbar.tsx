import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
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
} from "../ui/resizable-navbar";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    {
      name: t("features"),
      link: "#features",
    },
    {
      name: t("pricing"),
      link: "#pricing",
    },
    {
      name: t("contact"),
      link: "#contact",
    },
    {
      name: t("about"),
      link: "#about",
    },
    {
      name: t("gallery"),
      link: "/gallery",
    },
  ];

  const newNavItems = navItems.map((eachNav) => {
    let link = ``;
    if (pathname === `/${locale}/gallery`) {
      if (eachNav.link === "/gallery") {
        link = `/${locale}/gallery`;
      } else {
        link = `/${locale}${eachNav.link}`;
      }
    } else if (pathname === "/" || pathname === "/en" || pathname === "/id") {
      link = `${eachNav.link}`;
    }

    return {
      ...eachNav,
      link,
    };
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-10">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={pathname === "" ? navItems : newNavItems} />
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
}
