import React from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/register", "/auth/login", '/404'];

export default function AppShell(props: AppShellProps) {
  const { children } = props;
  const { pathname } = useRouter();
  console.log(pathname);
  
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}

      {children}
    </main>
  );
}
