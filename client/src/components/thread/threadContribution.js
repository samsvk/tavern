import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
export default () => {
  return (
    <li className="flex gap-3.5 relative items-center">
      <span className="absolute -left-12 rounded-full border border-green-900 h-[28px] w-[28px] text-md flex items-center justify-center text-green-300 bg-green-900">
        <IoMdCheckmark />
      </span>
      <div className="shrink-0">
        <Image
          className="border rounded-full border-main-border bg-main-800 shrink-0"
          height="28"
          width="28"
          src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
          alt="discord user profile picture generated by api"
        />
      </div>

      <p className="inline text-xs tracking-wide text-left text-white/70">
        Jay Pacheco contributed sound to this thread{" "}
        <a className="inline text-white text-ellipsis"> soundclip.wav</a>
      </p>
    </li>
  );
};
