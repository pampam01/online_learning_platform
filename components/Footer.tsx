import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      {/* container */}
      <div className="flex flex-row justify-between">
        {/* kiri */}
        <div className="flex flex-row gap-x-8 flex-wrap gap-y-8 sm:gap-y-0">
          <div className="flex flex-col text-xs gap-y-1.5">
            <p className="text-sm sm:text-lg font-semibold py-2">OpenEdu</p>
            <Link href="/" className="hover:text-blue-800">
              OpenEdu for Enterprise
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Mengajar di OpenEdu
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Menjadi Partner
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Sertifikat Professional
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Hubungi Kami
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Tentang Kami
            </Link>
          </div>
          <div className="flex flex-col text-xs gap-y-1.5">
            <p className="text-sm sm:text-lg font-semibold py-2">
              Community and legal
            </p>
            <Link href="/" className="hover:text-blue-800">
              Blog
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Showcase
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Terms of Service & Honor Code
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-blue-800">
              Help Center
            </Link>
            <Link href="/" className="hover:text-blue-800">
              FAQ
            </Link>
          </div>
        </div>
        {/* kanan */}
        <div className="flex flex-col">
          <p className="text-sm sm:text-lg font-semibold py-2">Mobile App</p>
          <div className="flex flex-col gap-y-3">
            <Image
              src="/google_play.png"
              alt=""
              height={0}
              width={150}
              className="cursor-pointer"
            />
            <Image
              src="/app_store.png"
              alt=""
              height={0}
              width={150}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex items-center h-16 border-t-2 mt-6 text-xs sm:text-md">
        © 2023 OpenEdu Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
