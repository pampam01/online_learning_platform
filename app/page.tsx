import CardComponent from "@/components/cards/Card";
import Slider from "@/components/slider/Slider";
import SliderBottom from "@/components/slider/SliderBottom";
import CardsHome from "@/components/cards/Cards";

import SliderMain from "@/components/slider/SliderMain";

const images = ["/images/a.jpg", "/images/b.jpg"];
const Page = () => {
  return (
    <>
      <SliderMain images={images} />
      <CardsHome />
      {/* <Slider /> */}
      {/* <CardVertical /> */}
      <SliderBottom />
    </>
  );
};
export default Page;
