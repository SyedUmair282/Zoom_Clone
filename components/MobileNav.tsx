'use client'
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer sm:hidden"
            src={"/icons/hamburger.svg"}
            height={36}
            width={36}
            alt="hamburger-icon"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="yoom_logo"
              className="max-sm:size-10"
              width={32}
              height={32}
            />
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                        <Link
                        href={link.route}                        
                        className={cn(
                            "flex  gap-4 items-center p-4 rounded-lg justify-start",
                            {
                            "bg-blue-1": isActive,
                            }
                        )}
                        >
                        <Image
                            src={link.imgUrl}
                            height={20}
                            width={20}
                            alt={link.label}
                        />
                        <p className="font-semibold">
                            {link.label}
                        </p>
                        </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
