import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"
            alt="Banner-1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/710YHhU1VXL._SX3000_.jpg"
            alt="Banner-2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61bmNDUhXdL._SX3000_.jpg"
            alt="Banner-3"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61DiesAUgCL._SX3000_.jpg"
            alt="Banner-4"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/616gIBzuB2L._SX3000_.jpg"
            alt="Banner-5"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61CkKvh5LTL._SX3000_.jpg"
            alt="Banner-6"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81xSDWOf8TL._SX3000_.jpg"
            alt="Banner-7"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/613QoALPiBL._SX3000_.jpg"
            alt="Banner-8"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
