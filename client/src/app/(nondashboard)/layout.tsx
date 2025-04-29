"use client";

import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
// import Landing from "./landing/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser } = useGetAuthUserQuery();
  console.log("authUser", authUser);
  return (
    <div className="h-full w-full">
      {/* navBar */}
      <Navbar />
      <main className={`h-full w-full flex flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
        {/* <Landing /> */}
      </main>
    </div>
  );
};

export default Layout;
