import { ReactNode } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
