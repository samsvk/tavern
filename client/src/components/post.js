import Image from "next/image";
export default () => {
  return (
    <div className="grid">
      <div className="flex gap-3">
        <Image
          className="rounded-full ring-1 ring-main-600 p-0.5"
          height="38"
          width="38"
          src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
          alt="discord user profile picture generated by api"
        />
        <span className="grid text-sm">
          <a>swkn#dev</a>
          <p className="text-xs tracking-wide">
            <span className="opacity-70">12 minutes ago on</span> Photoshop
          </p>
        </span>
      </div>
      <div>
        <Image src={"https://i.imgur.com/CmVXfHX.png"} height="100" width="100" />
      </div>
    </div>
  );
};
