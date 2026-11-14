

import { getXSchoolData } from "@/lib/api";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Program from "@/components/Program";
import Marquee from "@/components/Marquee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default async function Home() {
  const data = await getXSchoolData();

  return (
    <main>
      <div className="relative">
        <Header />
        <Banner
          title={data.banner_title}
          image={data.banner_image}
        />
        <About
          title={data.about_title}
          description={data.about_description}
          images={data.about_images}
        />
        <Founder founder={data.founders?.[0]} />
        <Program program={data.programs?.[0]} />
        <Marquee slider={data.text_slider} />
        <FAQ
          title={data.faq_title}
          questions={data.xschool_faq}
        />
        <Footer/>
      </div>
    </main>
  );
}
