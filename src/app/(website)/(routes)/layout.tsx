import { ReactNode } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";
import ScrollToTop from "../_components/scroll-to-top";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
