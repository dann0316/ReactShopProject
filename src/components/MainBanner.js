import bg0 from "../img/bg0.png";
import bg1 from "../img/bg1.png";
import bg2 from "../img/bg2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const MainBanner = () => {
  const images = [bg0, bg1, bg2];
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((a, i) => {
          return (
            <CarouselItem
              key={i}
              className="w-5/6 flex justify-center items-center"
            >
              <img
                src={a}
                alt="bg-img"
                className={`h-40 md:h-60 lg:h-80 ${imgLoad ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setImgLoad(true)}
              />
              {!imgLoad && (
                <div className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-[#9dab96]" />
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-white" />
      <CarouselNext className="bg-white" />
    </Carousel>
  );
};

export default MainBanner;
