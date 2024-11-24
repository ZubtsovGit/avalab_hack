import type { NextPage } from "next";
import Image from "next/image";

export type OnType = {
  className?: string;
};

const On: NextPage<OnType> = ({ className = "" }) => {
  return (
    <div className={`h-6 w-6 relative ${className}`}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-100" />
      <Image
        className="absolute h-1/4 w-2/5 top-[40%] right-[30%] bottom-[35%] left-[30%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
        loading="lazy"
        width={10}
        height={6}
        alt=""
        src="/check-icon.svg"
      />
    </div>
  );
};

export default On;
