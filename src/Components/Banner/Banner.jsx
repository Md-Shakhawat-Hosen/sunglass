import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init();


const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex-1"
      >
        <h1 className="font-bold text-4xl">
          You want to buy new Collection Sunglass for you
        </h1>
        <p>
          Sunglasses are used to shade the eyes from sunlight. They are usually
          made of a plastic or metal frame and two lenses that are darkened to
          filter out light. Sunglasses can have prescription lenses like
          eyeglasses, but they can also have lenses that are not for correcting
          vision.
        </p>
      </div>
      <div className="flex-1">
        <div data-aos="fade-left">
          <img src="/banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
