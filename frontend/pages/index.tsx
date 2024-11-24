import type { NextPage } from "next";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Component1 from "../components/component1";

const Frame: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Image
        className="w-[614px] relative max-h-full object-cover hidden max-w-full"
        width={614}
        height={560}
        alt=""
        src="/image-1@2x.png"
      />
      <NavigationBar />
      <FrameComponent />
      <FrameComponent1 />
      <Component1 />
    </div>
  );
};

export default Frame;
