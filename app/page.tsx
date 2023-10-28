import CardComponent from "@/components/Card";
import Slider from "@/components/Slider";
import SliderBottom from "@/components/SliderBottom";

import SliderMain from "@/components/SliderMain";

const images = ["/images/a.jpg", "/images/b.jpg"];
const Page = () => {
  return (

    <>
      <SliderMain images={images} />
      <CardComponent />
      <Slider />
      <SliderBottom />
    </>


  );
};
export default Page;
