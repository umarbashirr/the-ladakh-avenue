import { ReactNode } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";
import ScrollToTop from "../_components/scroll-to-top";
import { GoogleTagManager } from "@next/third-parties/google";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <ScrollToTop />
      <Footer />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
    </div>
  );
};

export default WebsiteLayout;
