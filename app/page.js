import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-white h-[44vh] md:h-[60vh] lg:h-[70vh] justify-center text-center px-4 md:px-8">
        <div className="font-bold flex flex-col md:flex-row gap-2 text-3xl md:text-4xl lg:text-5xl items-center">
          Contribution in the Projects
          <span>
            <img className="invertImg" src="../tea.gif" width={88} alt="Decorative tea icon" />
          </span>
        </div>
        <p className="text-sm md:text-base lg:text-lg max-w-xl">
          A crowd funding platform for creators. Get funded by your friends and followers. Start Now!
        </p>
        <div className="flex gap-2 flex-row ">
          <Link href="/login" passHref>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Start Now
            </button>
          </Link>
          <Link href="/about" passHref>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-16 pt-8 md:pb-24 md:pt-12 lg:pb-32 lg:pt-14 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-12 lg:mb-14">
          Your fans can contribute to the Project
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" src="../man.gif" width={72} alt="Man icon" />
            <p className="font-bold text-base md:text-lg">Fund Yourself</p>
            <p className="text-center text-sm md:text-base">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" src="../coin.gif" width={72} alt="Coin icon" />
            <p className="font-bold text-base md:text-lg">Fund Yourself</p>
            <p className="text-center text-sm md:text-base">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2" src="../group.gif" width={72} alt="Group icon" />
            <p className="font-bold text-base md:text-lg">Your fans want to help</p>
            <p className="text-center text-sm md:text-base">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-16 pt-8 md:pb-24 md:pt-12 lg:pb-32 lg:pt-14 flex flex-col items-center justify-center px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-12 lg:mb-14">Learn more about us</h2>
        <iframe
          width="320"
          height="180"
          className="md:w-[560px] md:h-[315px] lg:w-[640px] lg:h-[360px]"
          src="https://www.youtube.com/embed/5ymHDDUWzRY?si=_fuo7cH5FEyltoDF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
