import Footer from "@/landingComponents/Footer";
import Header from "../components/Header";
import FAQ from "../landingComponents/FAQ";

export default function LandingLayout({ children }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      {/* <FAQ />
      <Footer /> */}
    </div>
  );
}
