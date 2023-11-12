import { Carousell, HomePageCard, CarouselCategory, CarouselProduct } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background w-[183%] lg:w-full md:w-full">
      <div className=" m-auto">
        <Carousell />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-[23rem] ">
          <HomePageCard
            title={"Up to 50% off | TCL TVs"}
            img={
              "https://www.mobilesjin.com/wp-content/uploads/2021/07/tcl-qled-4k-tv.jpg"
            }
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Buy 2 Get 10% off, freebies & ..."}
            img={
              "https://images-eu.ssl-images-amazon.com/images/G/31/kindle-content-smeghn/ART/Jan23/BAU/758x608_phase3_ke._SY304_CB575273971_.jpg"
            }
            link={"See all offers"}
          />
          <HomePageCard
            title={"Starting ₹349 | Festive deals on..."}
            img={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img21/GW/HERO/P3/B/Headphone_v2_Desktop_Cat_card_1x._SY304_CB575149386_.jpg"
            }
            link={"Find out more"}
          />
          <HomePageCard
            title={"Up to 40% off | Deals on mobi..."}
            img={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg"
            }
            link={"See all offers"}
          />
          <HomePageCard
            title={"Up to 80% off | Laptops,..."}
            img={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Central/P3/CEPC/R01_Cepc_Desktop_CC_1x._SY304_CB575146312_.jpg"
            }
            link={"See more"}
          />
          <HomePageCard
            title={"Diwali Sale"}
            img={
              "https://www.couponscurry.com/pics/images/overlay-clothing-diwali-sale_1699539874.jpg"
            }
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={
              "https://m.media-amazon.com/images/I/61zfyWSgVBL._AC_SL1000_.jpg"
            }
            link={"See more"}
          />
          <HomePageCard
            title={"Amazon prime"}
            img={
              "https://i.blogs.es/318f06/amazon-prime-video-impuesto-digital/840_560.jpg"
            }
            link={"Learn more"}
          />
         
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px] ">
          <img
            className="h-[100%] m-auto cursor-pointer"
            src={
              "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ee5a127f-6e1f-42c7-ac7a-a376a5a2310c.jpg"
            }
            alt="Banner 1"
          />
        </div>
      </div>
     
    </div>
  );
};

export default HomePage;
