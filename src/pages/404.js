import Image from "next/image";
import MainTheme from "./Theme/MainTheme";
import Link from "next/link";

export default function FourOFour() {
  return (
    <MainTheme>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src="/logo.png"
          alt=""
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
        <div className="mt-5">
          <p className="font-semibold text-yellow-600 text-xl">
            Looking for something?
          </p>
          <p className="mt-1">
            We&apos;re sorry. The Web address you entered is not a functioning
            page on our site.
          </p>
          <p className="mt-1 text-center text-lg">
            Go to Amazon&apos;s{" "}
            <Link href="/">
              <span className="underline font-semibold text-blue-600 cursor-pointer">
                Home
              </span>
            </Link>{" "}
            Page
          </p>
        </div>
      </div>
    </MainTheme>
  );
}
