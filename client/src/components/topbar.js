import Slider from "./slider";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "./dropdown";
import { useContext } from "react";
import { BsBell } from "react-icons/bs";
import Modal from "../components/modal";
import { useRouter } from "next/router";
import Notis from "./notifications/notis";
import Create from "../components/create";
import { Context } from "../store/context";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting, AiOutlineFileAdd } from "react-icons/ai";
import Link from "next/link";
import { BiLogOutCircle, BiCookie } from "react-icons/bi";
import { handleLogout } from "../static/api";
import { RxUpdate } from "react-icons/rx";

export default () => {
  const { state, dispatch } = useContext(Context);
  const { pathname } = useRouter();
  const [profile, setProfile] = useState(false);
  const [notiications, setNotifications] = useState(false);
  const [create, setCreate] = useState(false);
  const router = useRouter();

  return (
    <>
      <Modal show={notiications} setShow={setNotifications}>
        <Notis />
      </Modal>
      <Modal show={create} setShow={setCreate}>
        <Create />
      </Modal>

      <div className="fixed flex items-center border-b border-main-border bg-main-800 w-[calc(100%-62px)] right-0 z-10 top-0 min-h-[62px] max-h-[62px] px-2.5 md:px-5 py-5 gap-2.5 md:gap-5">
        <div className=" flex-1 flex w-full gap-2.5 md:gap-5">
          <form className="flex items-center justify-center w-[200px] md:w-[350px] pl-4 pr-3 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
            <input
              className="w-full text-sm bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm placeholder:font-normal"
              placeholder="Looking to explore..."
            />
            <button className="pl-2 shrink-0 ">
              <AiOutlineSearch className="text-xl opacity-70" />
            </button>
          </form>
          {pathname.startsWith("/f") && <Slider />}
        </div>

        <div className="ml-0 flex-0 md:ml-auto">
          {state.user !== null && (
            <aside className="flex flex-row items-center gap-2.5 ml-auto md:gap-2.5">
              <span className="relative flex mt-auto mb-auto">
                <button
                  onClick={() => setProfile((_) => !_)}
                  className="active:outline-none focus:outline-none"
                >
                  <Image
                    className="rounded-full border border-main-border hover:border-white/70 p-0.5 hover:ring-white/70 duration-150 hover:cursor-pointer"
                    height="38"
                    width="38"
                    src={`https://cdn.discordapp.com/avatars/${state.user.me.id}/${state.user.me.avatar}.png`}
                    alt="discord user profile picture generated by api"
                  />
                </button>
                <Dropdown show={profile} setShow={setProfile}>
                  {state.user && (
                    <>
                      <div className="p-3.5 flex items-center gap-1.5 overflow-hidden">
                        <Image
                          className="rounded-full ring-1 ring-main-border p-0.5"
                          height="38"
                          width="38"
                          src={`https://cdn.discordapp.com/avatars/${state?.user?.me?.id}/${state.user.me.avatar}.png`}
                          alt="discord user profile picture generated by api"
                        />
                        <span className="block text-sm text-left">
                          <a>
                            {state.user.me.username}#{state.user.me.discriminator}
                          </a>
                          {/* <p className="text-xs text-left opacity-70">{state.user.me.email}</p> */}
                          <p className="text-xs text-left opacity-70">development@tavern.gg</p>
                        </span>
                        <span className="block px-2.5 py-0.5 ml-auto text-sm text-green-400 rounded-full bg-green-900/40">
                          Pro
                        </span>
                      </div>
                      <ul className="text-sm border-t text-white/70 border-main-border  py-2.5 gap-2.5 grid">
                        <li className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5">
                          <AiOutlineSetting className="text-[1.3rem]" />{" "}
                          <Link href={`/profile/@${state.user.me.username}`}>Account Settings</Link>
                        </li>
                        <li className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5">
                          <RxUpdate className="text-[1.3rem]" />{" "}
                          <Link href={`/profile/@${state.user.me.username}`}>Manage Subscription</Link>
                        </li>
                        <li className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5">
                          <BiCookie className="text-[1.3rem]" />{" "}
                          <Link href={`/profile/@${state.user.me.username}`}>Cookie Information</Link>
                        </li>
                        <button
                          onClick={() => handleLogout(dispatch, router)}
                          className="leading-5 border-t border-main-border pt-2.5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5"
                        >
                          <BiLogOutCircle className="text-[1.3rem]" /> <span>Log out</span>
                        </button>
                      </ul>
                    </>
                  )}
                </Dropdown>
              </span>
              <button
                onClick={() => setCreate((_) => !_)}
                className="h-[38px] w-[38px] bg-main-700 border-main-border hover:border-white/70 duration-150 border rounded-full flex items-center justify-center relative shrink-0 active:outline-none focus:outline-none outline-none"
              >
                <AiOutlineFileAdd className="text-[1.3rem] shrink-0 text-main-text" />
              </button>
              <button
                onClick={() => setNotifications((_) => !_)}
                className="h-[38px] w-[38px] bg-main-700 border-main-border hover:border-white/70 duration-150 border rounded-full flex items-center justify-center relative shrink-0 active:outline-none focus:outline-none outline-none "
              >
                <span className="absolute top-0 right-0 z-10 block w-3 h-3 bg-green-400 border-2 rounded-full border-main-800" />
                <BsBell className="text-[1.3rem] shrink-0  text-main-text" />
              </button>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
