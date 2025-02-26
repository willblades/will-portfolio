import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center x1:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Will Blades</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have over 9 years of experience in full-stack development, API integration, and back-end Development. 
              I hold a Master&apos;s degree in Applied Computer Science, with a focus on Machine Learning and evolutionary
              algorithms. When not programming, I have a passion for the Japanese fencing art of Kendo
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/will-portfolio/assets/resume.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download my Resume</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex items-center gap-4" 
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-600" />
                </div>
              </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Statistics />
    </section>
  
  );
}

export default Home;
