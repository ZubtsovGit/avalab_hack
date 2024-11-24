import type { NextPage } from "next";
import Image from "next/image";
import On from "./on";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[47.6px] box-border max-w-full text-left text-29xl text-black font-h3 mq1050:pb-[31px] mq1050:box-border mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-12 px-[100px] box-border gap-9 max-w-full mq750:gap-[18px] mq750:py-[31px] mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 w-[600px] relative text-inherit uppercase font-bold font-inherit inline-block max-w-full mq1050:text-19xl mq450:text-10xl">
          Умная система поддержки бизнеса
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start gap-[100px] max-w-full lg:flex-wrap mq750:gap-[50px] mq450:gap-[25px]">
          <form className="m-0 flex flex-col items-start justify-start gap-2 max-w-full lg:flex-1 mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-7 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
                <h2 className="m-0 w-[499px] relative text-13xl leading-[28px] font-normal font-h3 text-black text-left inline-block max-w-full mq1050:text-7xl mq1050:leading-[22px] mq450:text-lgi mq450:leading-[17px]">
                  Выберите способ входа
                </h2>
                <div className="self-stretch border-gray-200 border-b-[1px] border-solid box-border flex flex-row items-start justify-between max-w-full gap-[11px] mq750:flex-wrap">
                  <div className="w-[189px] border-black border-b-[1px] border-solid box-border flex flex-col items-center justify-center py-0 pl-0 pr-2">
                    <div className="self-stretch relative text-5xl leading-[28px] font-h3 text-black text-left mq450:text-lgi mq450:leading-[22px]">
                      Полный доступ
                    </div>
                  </div>
                  <div className="w-[340px] flex flex-col items-center justify-center py-0 px-2 box-border max-w-full">
                    <div className="self-stretch relative text-5xl leading-[28px] font-h3 text-gray-200 text-left mq450:text-lgi mq450:leading-[22px]">
                      Демонстрационный доступ
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[466px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
              <div className="h-[51px] flex-1 rounded-sm border-gray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-2.5 px-9 max-w-full">
                <input
                  className="w-[235px] [border:none] [outline:none] font-medium font-text-paragraph text-lg bg-[transparent] relative leading-[26px] text-darkgray text-left inline-block p-0"
                  placeholder="ИНН организации / E-mail"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[466px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
              <div className="h-[51px] flex-1 rounded-sm border-gray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-2.5 px-9 max-w-full">
                <input
                  className="w-[68px] [border:none] [outline:none] font-medium font-text-paragraph text-lg bg-[transparent] relative leading-[26px] text-darkgray text-left inline-block p-0"
                  placeholder="Пароль"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[443px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border gap-[13px] max-w-full mq450:flex-wrap">
              <On />
              <div className="flex-1 relative text-base leading-[26px] font-text-paragraph text-darkgray text-left inline-block min-w-[265px] max-w-full">
                Я соглашаюсь на обработку персональных данных.
              </div>
            </div>
            <div className="w-[466px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border gap-6 max-w-full mq750:flex-wrap">
              <button className="cursor-pointer [border:none] py-4 pl-9 pr-[35px] bg-cornflowerblue-100 rounded-sm flex flex-row items-start justify-start hover:bg-cornflowerblue-200">
                <div className="flex-1 relative text-xl leading-[28px] font-medium font-h3 text-gray-100 text-center inline-block min-w-[72px] mq450:text-base mq450:leading-[22px]">
                  ВОЙТИ
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-4 pl-9 pr-[35px] bg-gray-100 flex-1 rounded-sm flex flex-row items-start justify-start box-border min-w-[194px] hover:bg-dimgray">
                <div className="flex-1 relative text-xl leading-[28px] uppercase font-medium font-h3 text-white text-center mq450:text-base mq450:leading-[22px]">
                  Зарегистрироваться
                </div>
              </button>
            </div>
            <div className="w-[465.5px] flex flex-row items-start justify-start py-0 pl-[167px] pr-[166px] box-border max-w-full mq450:pl-[83px] mq450:pr-[83px] mq450:box-border">
              <div className="flex-1 relative text-base leading-[26px] font-text-paragraph text-gray-100 text-left">
                или войти через
              </div>
            </div>
            <button className="cursor-pointer border-gosblue border-[1px] border-solid py-2 px-[73px] bg-[transparent] w-[466px] rounded-sm box-border flex flex-row items-start justify-start gap-4 min-h-[56px] max-w-full mq750:flex-wrap mq450:pl-9 mq450:pr-9 mq450:box-border">
              <Image
                className="h-9 w-9 relative"
                width={36}
                height={36}
                alt=""
                src="/gov-login-image.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[173px]">
                <div className="self-stretch relative text-5xl leading-[32px] font-medium font-h3 text-gosblue text-left mq450:text-lgi mq450:leading-[26px]">
                  Войти через Госуслуги
                </div>
              </div>
            </button>
          </form>
          <div className="flex-1 flex flex-col items-start justify-start pt-[22.7px] px-0 pb-0 box-border min-w-[390px] max-w-full mq750:min-w-full">
            <Image
              className="self-stretch h-[273px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              width={600}
              height={273}
              alt=""
              src="/undraw-artificial-intelligence-re-enpp-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
