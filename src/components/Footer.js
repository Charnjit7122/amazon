import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-[#131921] text-white">
      <div className="bg-[#232F3E] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
        <div>
          <h1 className="footerdiv font-bold text-lg mb-2"> Get to Know Us </h1>

          <p className="footer_items">About Us</p>
          <p className="footer_items">Careers</p>
          <p className="footer_items">Press Releases</p>
          <p className="footer_items">Amazon Cares</p>
          <p className="footer_items">Gift a Smile</p>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Connect with Us </h1>

          <p className="footer_items">Facebook</p>
          <p className="footer_items">Twitter</p>
          <p className="footer_items">Instagram</p>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Make Money with Us </h1>

          <p className="footer_items">Sell on Amazon</p>
          <p className="footer_items">Sell under Amazon Accelerator</p>
          <p className="footer_items">Amazon Global Selling</p>
          <p className="footer_items">Become an Affiliate</p>
          <p className="footer_items">Fulfilment by Amazon</p>
          <p className="footer_items">Advertise Your Products</p>
          <p className="footer_items">Amazon Pay on Merchants</p>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3"> Let Us Help You </h1>

          <p className="footer_items">COVID-19 and Amazon</p>
          <p className="footer_items">Your Account</p>
          <p className="footer_items">Returns Centre</p>
          <p className="footer_items">100% Purchase Protection</p>
          <p className="footer_items">Amazon App Download</p>
          <p className="footer_items">Amazon Assistant Download</p>
          <p className="footer_items">Help</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
        <Image
          src="/AmazonWhite.png"
          width={76}
          height={23}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      <div className="text-center pb-3 text-xs">Group 3 Amazon Clone</div>
    </div>
  );
}
