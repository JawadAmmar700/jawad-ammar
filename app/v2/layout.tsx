import "@/styles/v2.css";
import { ReactNode } from "react";
import Providers from "@/lib/providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="body" className="bg-white dark:bg-black">
      <Providers>{children}</Providers>
    </div>
  );
}
