import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FrontPageCard from "../components/FrontPageCard";

import createChannelsImg from "../assets/create-channels.png";
import joiningChannelsImg from "../assets/joining-channels.png";
import tabsShowcaseImg from "../assets/tabs-showcase.png";

export default function FrontPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <main className="my-8 flex w-full justify-center">
        <div className="w-full">
          <FrontPageCard
            title="Create an invite-only place where you belong"
            content="Create as many channels as you want and organize them exactly how you want"
            imgSrc={createChannelsImg}
            imgAlt="channel creation showcase"
          />
          <FrontPageCard
            mirror
            title="Easily switch between different channels"
            content="Manage your open channels easily with tabs on Desktop or Mobile"
            imgSrc={tabsShowcaseImg}
            imgAlt="tabs system showcase"
          />
          <FrontPageCard
            title="Find public channels about your interests"
            content=""
            imgSrc={joiningChannelsImg}
            imgAlt="channel finding and joining showcase"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
