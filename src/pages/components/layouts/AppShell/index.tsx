import React from "react";
// import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

// dynamic import
const Navbar = dynamic(() => import("../Navbar"));

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const disableNavbar = ["/auth/register", "/auth/login", "/404"];

export default function AppShell(props: AppShellProps) {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}

      {children}
    </main>
  );
}
