import type { NextPage } from "next";
import Image from "next/image";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-12 px-0 box-border gap-12 max-w-full text-left text-21xl text-black font-h3 lg:pt-[31px] lg:pb-[31px] lg:box-border mq750:gap-6 mq750:pt-5 mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-[100px] pr-[141px] box-border gap-10 max-w-full lg:flex-wrap mq750:gap-5 mq750:pl-[50px] mq750:pr-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-[0.9741] rounded-6xs bg-cornflowerblue-100 flex flex-col items-start justify-start py-0 pl-2 pr-[7px] box-border min-w-[376px] max-w-full lg:flex-1 mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq1050:text-13xl mq450:text-5xl">
            Доступные меры поддержки
          </h1>
        </div>
        <div className="flex-1 relative text-lg inline-block min-w-[377px] max-w-full lg:flex-1 mq750:min-w-full">
          Мы предоставляем информацию о доступных мерах поддержки для развития и
          роста бизнеса. Меры поддержки бизнеса:
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-11xl mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 px-[100px] box-border gap-10 max-w-full mq750:gap-5 mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 cursor-pointer  shadow-[0px_5px_0px_#191a23] rounded-26xl bg-whitesmoke border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] min-w-[390px] max-w-full gap-5 mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="flex flex-col items-start justify-between min-h-[210px] mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 px-[7px] mq750:self-stretch mq750:w-auto">
                  <div className="relative font-medium mq1050:text-5xl mq450:text-lg">
                    Приоритетные отрасли
                  </div>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  loading="lazy"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[170px] w-[210px] relative object-cover mq750:flex-1"
              loading="lazy"
              width={210}
              height={170}
              alt=""
              src="/illustration@2x.png"
            />
          </div>
          <div className="flex-1 cursor-pointer shadow-[0px_5px_0px_#191a23] rounded-26xl bg-cornflowerblue-100 border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] min-w-[390px] max-w-full gap-5 mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="flex flex-col items-start justify-between min-h-[210px] mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 px-[7px] mq750:self-stretch mq750:w-auto">
                  <div className="relative font-medium mq1050:text-5xl mq450:text-lg">
                    Финансовая поддержка
                  </div>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[147.6px] w-[210px] relative object-cover mq750:flex-1"
              width={210}
              height={148}
              alt=""
              src="/illustration-1@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[100px] box-border gap-10 max-w-full text-white mq750:gap-5 mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 cursor-pointer shadow-[0px_5px_0px_#191a23] rounded-26xl bg-gray-100 border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] max-w-full gap-5 mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="h-[210px] flex flex-col items-start justify-between min-w-[270px] mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 pl-[7px] pr-1.5 mq750:self-stretch mq750:w-auto">
                  <div className="self-stretch relative font-medium mq1050:text-5xl mq450:text-lg">
                    Обучение
                  </div>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon-2.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[210px] w-[210px] relative object-cover mq750:flex-1"
              width={210}
              height={210}
              alt=""
              src="/illustration-2@2x.png"
            />
          </div>
          <div className="h-[310px] flex-1 cursor-pointer shadow-[0px_5px_0px_#191a23] rounded-26xl bg-whitesmoke border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] max-w-full gap-5 text-black mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="self-stretch w-[270px] flex flex-col items-start justify-between mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 pl-[7px] pr-1.5 mq750:self-stretch mq750:w-auto">
                  <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq1050:text-5xl mq450:text-lg">
                    Консультации
                  </h3>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[192.7px] w-[210px] relative object-contain mq750:flex-1"
              loading="lazy"
              width={210}
              height={193}
              alt=""
              src="/tokyosendingmessagesfromoneplacetoanother-1@2x.png"
            />
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 px-[100px] box-border gap-10 max-w-full text-left text-11xl text-black font-h3 mq750:gap-5 mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 cursor-pointer shadow-[0px_5px_0px_#191a23] rounded-26xl bg-cornflowerblue-100 border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] min-w-[390px] max-w-full gap-5 mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="h-[210px] flex flex-col items-start justify-between mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 px-[7px] mq750:self-stretch mq750:w-auto">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit mq1050:text-5xl mq450:text-lg">
                    Регистрация, разрешения, экспертиза
                  </h3>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[195.9px] w-[210px] relative object-cover mq750:flex-1"
              width={210}
              height={196}
              alt=""
              src="/illustration-3@2x.png"
            />
          </div>
          <div className="flex-1 cursor-pointer shadow-[0px_5px_0px_#191a23] rounded-26xl bg-gray-100 border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[49px] min-w-[390px] max-w-full gap-5 text-white mq750:flex-wrap mq750:pl-6 mq750:pr-6 mq750:box-border mq750:min-w-full">
            <div className="flex flex-col items-start justify-between min-h-[210px] mq750:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-6xs flex flex-col items-start justify-start py-0 px-[7px] mq750:self-stretch mq750:w-auto">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit mq1050:text-5xl mq450:text-lg">
                    Маркетинг и продвижение
                  </h3>
                </div>
              </div>
              <div className="w-[237px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <Image
                  className="h-[41px] w-[41px] relative"
                  width={41}
                  height={41}
                  alt=""
                  src="/icon-2.svg"
                />
                <div className="flex-1 relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  Узнать подробнее
                </div>
              </div>
            </div>
            <Image
              className="h-[170px] w-[210px] relative object-cover mq750:flex-1"
              width={210}
              height={170}
              alt=""
              src="/illustration-4@2x.png"
            />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Component1;
