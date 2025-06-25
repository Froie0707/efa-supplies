import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
