import Image from "next/image";
import { getDiscordURL } from "../static/util";
import { SiDiscord } from "react-icons/si";

export default () => {
  return (
    <>
      <nav className="flex items-center justify-center mx-auto mt-20 max-w-7xl">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center -space-x-3">
            <span className="block w-6 h-6 border-2 rounded-full border-main-900 bg-main-300" />
            <span className="block w-8 h-8 border-4 rounded-full border-main-900 bg-main-500" />
          </div>
          <h1 className="font-medium tracking-wide">Tavern</h1>
        </div>
        <ul className="flex items-center gap-5 ml-auto text-white/70">
          <li className="text-sm font-normal leading-5 text-white/70">
            What is Tavern?
          </li>
          <li className="text-sm font-normal leading-5 text-white/70">Features</li>
          <li className="text-sm font-normal leading-5 text-white/70">Pricing</li>
        </ul>
      </nav>

      <main className="flex flex-col gap-5 mx-auto mt-48 r max-w-7xl">
        <h1 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal text-left">
          All-In-One collaberation and discovery tool for creative storytellers.
        </h1>

        <p className="max-w-sm text-sm font-normal leading-5 text-white/70">
          Join these and 500+ other digital creatives and embark on your creative
          storytelling journey.
        </p>
        <div className="relative flex items-center -space-x-3">
          {[...Array(10)].map((_, index) => (
            <Image
              className={`rounded-full border-[3px] border-main-900 shadow-md`}
              height="36"
              width="36"
              quality={100}
              src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
              alt="discord user profile picture generated by api"
            />
          ))}
        </div>

        <p className="max-w-sm text-sm font-normal leading-5 text-white/70">
          Begin turning independant art into meaningful creative stories by the help
          of Tavern's community.
        </p>

        <a
          href={getDiscordURL()}
          className="max-w-max flex-1 px-6 min-h-[38px] gap-2 text-sm relative text-white/70 border rounded-md bg-main-800 border-main-border  hover:border-white/70  duration-150 flex items-center justify-center"
        >
          Continue with Discord
          <SiDiscord size={18} />
        </a>
      </main>
    </>
  );
};
