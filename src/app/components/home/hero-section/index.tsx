import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container mx-auto">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          {/* Texte */}
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1 className="text-4xl md:text-5xl font-bold">I am Hadjira</h1>
                <div className="wave">
                  <Image 
                    src="/images/home/banner/wave-icon.svg" 
                    alt="wave-icon" 
                    width={100} 
                    height={100} 
                  />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold">Developer Full-Stack</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Welcome to my webpage. I am a developer full-stack for all services. Contact me on my email or through the number below.
            </p>
          </div>

          {/* Image mobile/tablet */}
          <Image 
            src="/images/home/banner/banner-img.png" 
            alt="banner-img" 
            width={685} 
            height={650} 
            className="object-cover"
          />
        </div>
      </div>

      {/* Image desktop */}
      <div className="absolute right-0 top-0 ">
        <Image 
          src="/images/home/banner/banner-img.png" 
          alt="banner-img" 
          width={685} 
          height={6500} 
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
    
