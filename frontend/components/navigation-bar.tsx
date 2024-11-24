import type { NextPage } from "next";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: NextPage<NavigationBarType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch overflow-hidden flex flex-row items-start justify-between py-6 px-[100px] box-border max-w-full gap-5 text-left text-21xl text-cornflowerblue-100 font-montserrat-alternates mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
        <a className="[text-decoration:none] relative font-bold text-[inherit]">
          импульс
        </a>
      </div>
      <nav className="m-0 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full mq1050:hidden">
        <nav className="m-0 flex flex-row items-start justify-start gap-10 text-left text-xl text-black font-h3 mq750:gap-5">
          <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[80px]">
            Главная
          </a>
          <a className="[text-decoration:none] w-[173px] relative leading-[28px] text-[inherit] inline-block shrink-0">
            Меры поддержки
          </a>
          <div className="h-7 w-[214px] relative">
            <a className="[text-decoration:none] absolute top-[0px] left-[0px] leading-[28px] text-[inherit] inline-block w-[66px] h-7 min-w-[66px]">
              Услуги
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[105px] leading-[28px] text-[inherit] inline-block w-[110px] h-7">
              Сравнение
            </a>
          </div>
        </nav>
      </nav>
      <button className="cursor-pointer [border:none] py-4 pl-9 pr-[35px] bg-cornflowerblue-100 rounded-sm flex flex-row items-start justify-start hover:bg-cornflowerblue-200">
        <a className="[text-decoration:none] flex-1 relative text-xl leading-[28px] font-medium font-h3 text-gray-100 text-center inline-block min-w-[72px]">
          ВОЙТИ
        </a>
      </button>
    </header>
  );
};

export default NavigationBar;
