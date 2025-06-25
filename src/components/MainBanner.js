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

const MainBanner = () => {
  const images = [bg0, bg1, bg2];
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
              <img src={a} alt="bg-img" className="h-80" />
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
