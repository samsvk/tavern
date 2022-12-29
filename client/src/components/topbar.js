import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import Create from "./create";
import { useState, useRef, useEffect } from "react";

export default ({ user }) => {
  const [upload, setUpload] = useState(false);

  return (
    <>
      <Create upload={upload} setUpload={setUpload} />
      <div className="fixed flex items-center border-b border-main-border bg-main-800 w-[calc(100%-62px)] right-0 z-10 top-0 min-h-[62px] max-h-[62px] px-5 py-5">
        <form className="flex items-center justify-center w-[275px] mr-5 px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
          <button>
            <AiOutlineSearch className="mr-2 text-xl opacity-70" />
          </button>
          <input
            className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm placeholder:font-normal"
            placeholder="Looking to explore..."
          ></input>
        </form>

        <ul className="flex max-w-max border rounded-md relative bg-main-700 border-main-border max-h-[38px] min-h-[38px] items-center">
          <li className="flex px-3 py-1 mx-1 rounded-md">
            <span className="z-10 text-sm font-normal opacity-100">Recommended</span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md">
            <span className="z-10 text-sm font-normal opacity-70">
              Mutual friends
            </span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md">
            <span className="z-10 text-sm font-normal opacity-70">Your posts</span>
          </li>
        </ul>

        <button
          className="ml-5 px-4 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white/70 border rounded-md bg-main-700 border-main-border "
          onClick={() => setUpload(true)}
        >
          Create Post
        </button>

        <div className="ml-auto">
          {user && (
            <aside className="flex items-center gap-5 ml-auto">
              <span className="text-sm text-right">
                <a>
                  {user.me.username}#{user.me.discriminator}
                </a>
                <p className="text-xs tracking-wide text-right opacity-70">
                  {user.me.email}
                </p>
              </span>
              <Image
                className="rounded-full ring-1 ring-main-border p-0.5"
                height="38"
                width="38"
                src={`https://cdn.discordapp.com/avatars/${user.me.id}/${user.me.avatar}.png`}
                alt="discord user profile picture generated by api"
              />
              <span className="h-[38px] w-[38px] bg-main-700 border-main-border border rounded-full flex items-center justify-center">
                <BsBell className="text-xl shrink-0 opacity-70" />
              </span>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
