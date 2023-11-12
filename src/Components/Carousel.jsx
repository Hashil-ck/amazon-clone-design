import Carousel from "react-bootstrap/Carousel";

const Carousell = () => {
  return (
    <div className="h-[600px] bg-white">
      {/* <!-- bootstarp --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      ></link>
      <Carousel className="cursor-pointer">
        <Carousel.Item className="h-[58rem] bg-gradient-to-b from-yellow-200">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p3b/unrecpchero/PC-1MA_3000_2._CB573799289_.jpg"
            alt="carousel1"
          />
        </Carousel.Item>
        <Carousel.Item className="h-[58rem] bg-gradient-to-b from-[#01affa] via-[#038fcb]">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase3/New_GW/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_PC_Hero_3000x1200._CB574290071_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="h-[58rem] bg-gradient-to-b from-[#038d17] via-[#038d17]">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/ARTs/Jupiter/Phase3/GW/PC_Hero_P3B_unrec_3000x1200._CB573772477_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="h-[58rem] bg-gradient-to-b from-[#038d74] via-[#039a7e] ">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/CEPC_soundbars_speakers/Phase_3_ELP_Fold/Phase_3_Tallhero_3000x12001._CB573744264_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="h-[58rem] bg-gradient-to-b from-[#7503a5] via-[#7503a5]">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Phase3/OUTDOOR-BANK-B-2X-1stNov._CB573762852_.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
