import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

import Image from "next/image";
const Notis = () => {
  const slideContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const STATIC_OPTS = [{ name: "Unread" }, { name: "Following" }, { name: "Archived" }];

  useEffect(() => {
    const childNodes = [...slideContainer.current.childNodes].slice(1);
    const activeChildNode = childNodes[activeSlide];
    const { width, height } = activeChildNode.getBoundingClientRect();
    const lavaLamp = slideContainer.current.childNodes[0];
    lavaLamp.style.width = `${width}px`;
    lavaLamp.style.height = `${height}px`;
    lavaLamp.style.left = `${activeChildNode.offsetLeft}px`;
  }, [activeSlide]);

  return (
    <>
      <div className="sticky top-0 flex flex-col h-full overflow-x-visible overflow-y-scroll border-b shadow-lg border-main-border bg-main-800">
        <div className="flex flex-col items-center px-5 min-h-[61px]">
          {/* <ul
          ref={slideContainer}
          className="relative flex gap-5 px-5 py-4 text-sm leading-5 border-t text-main-text/70 border-main-border min-h-[62px]"
        >
          <span
            className={`will-change-transform block w-full absolute bottom-0 z-10 font-normal bg-white rounded-md  max-h-[1px] left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
          />
          {STATIC_OPTS.map((_, i) => (
            <li
              key={i}
              onClick={() => {
                setActiveSlide(i);
              }}
              className={`${
                activeSlide === i && "text-main-text"
              } flex gap-2.5 items-center max-w-max hover:cursor-pointer duration-75`}
            >
              {_.name}
              <span
                className={`${
                  activeSlide === i
                    ? "bg-white text-black"
                    : "bg-white/70 text-black"
                } flex items-center w-full h-5 px-1 text-xs font-semibold rounded-md max-w-max duration-75`}
              >
                108
              </span>
            </li>
          ))}
          <li className="flex ml-auto text-main-text/70">
            <AiOutlineSetting className="text-xl" />{" "}
          </li>
        </ul> */}

          <div className="flex w-full mt-auto mb-auto">
            <ul
              ref={slideContainer}
              className="flex justify-center items-center relative p-0.5 border rounded-md border-main-border bg-main-800 max-h-[38px] min-h-[38px] gap-1"
            >
              <span
                className={`will-change-transform block w-full absolute z-10 font-normal bg-main-700 rounded-md left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
              />
              {STATIC_OPTS.map((_, i) => (
                <li
                  className={`px-6 gap-1.5 py-1 h-full font-normal select-none rounded-md z-50 relative text-main-text/70 text-sm flex items-center hover:cursor-pointer hover:text-main-text duration-150  ${
                    activeSlide === i && "text-main-text"
                  }`}
                  onClick={() => {
                    setActiveSlide(i);
                  }}
                >
                  {_.name}
                  <span className="absolute top-0 bottom-0 z-10 block w-2 h-2 my-auto bg-green-400 rounded-full right-2 " />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="block max-h-full overflow-auto top-48">
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="inline-block">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              requested to commit a file <br />
              <span className="inline-block font-medium text-green-400">Astro Illustration</span> to{" "}
              <span className="inline-block font-medium text-green-400">Arthus Menthil the Pendragon...</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">Quick actions</a>
            </p>
            <div className="flex gap-2.5 mt-0.5">
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
                Approve
              </button>
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm text-main-text/70 border rounded-md bg-main-700 border-main-border  hover:border-white/70 duration-150">
                Deny
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="inline-flex items-center">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              commented on
              <span className="inline-block ml-1 font-medium text-green-400 max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden">
                Arthus Menthil the Pendragon
              </span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">See full comment</a>
            </p>
            <div className="p-2 mt-0.5 text-sm border rounded-md bg-main-700 border-main-border text-main-text">
              <p className="text-xs ">
                Amazing art, is this the first draft? Feel free to take a look at a piece I've made and tell me
                what you think...
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="items-center inline-block whitespace-nowrap">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              favourited your post
              <br />
              <span className="inline-block text-green-400 ont-medium">Arthus Menthil the Pendragon</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">See full post</a>
            </p>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="inline-block">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              requested to commit a file <br />
              <span className="inline-block font-medium text-green-400">Astro Illustration</span> to{" "}
              <span className="inline-block font-medium text-green-400">Arthus Menthil the Pendragon...</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">Quick Actions</a>
            </p>
            <div className="flex gap-2.5 mt-0.5">
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
                Approve
              </button>
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm text-main-text/70 border rounded-md bg-main-700 border-main-border  hover:border-white/70 duration-150">
                Deny
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="inline-block">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              requested to commit a file <br />
              <span className="inline-block font-medium text-green-400">Astro Illustration</span> to{" "}
              <span className="inline-block font-medium text-green-400">Arthus Menthil the Pendragon...</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">Quick Actions</a>
            </p>
            <div className="flex gap-2.5 mt-0.5">
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
                Approve
              </button>
              <button className="px-6 min-h-[32px] max-w-[120px] w-full text-sm text-main-text/70 border rounded-md bg-main-700 border-main-border  hover:border-white/70 duration-150">
                Deny
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="inline-flex items-center">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              commented on
              <span className="inline-block ml-1 font-medium text-green-400 max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden">
                Arthus Menthil the Pendragon
              </span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">See full comment</a>
            </p>
            <div className="p-2 mt-0.5 text-sm border rounded-md bg-main-700 border-main-border text-main-text">
              <p className="text-xs ">
                Amazing art, is this the first draft? Feel free to take a look at a piece I've made and tell me
                what you think...
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="items-center inline-block whitespace-nowrap">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              favourited your post
              <br />
              <span className="inline-block text-green-400 ont-medium">Arthus Menthil the Pendragon</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">See full post</a>
            </p>
          </div>
        </div>
        <div className="flex items-start w-full gap-2.5 p-5 border-b border-main-border">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col text-sm text-main-text/70 gap-1.5">
            <p className="items-center inline-block whitespace-nowrap">
              <span className="inline-block mr-1 font-medium text-main-text">Synapois#1983</span>
              favourited your post
              <br />
              <span className="inline-block text-green-400 ont-medium">Arthus Menthil the Pendragon</span>
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              2 hours ago <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">See full post</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notis;
