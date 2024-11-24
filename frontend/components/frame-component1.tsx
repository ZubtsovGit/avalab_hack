'use client'

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; content: string }[]>([
    { type: 'bot', content: 'Добрый день, чем я могу Вам помочь?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { type: 'user', content: inputValue }];
    // @ts-expect-error
  
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      let botResponse = 'Извините, я не могу ответить на этот вопрос, но у вас хорошее чувство юмора';

      if (inputValue.toLowerCase().includes('меры')) {
        botResponse = 'Благодарю Вас за ваш вопрос. Нашёл следующие результаты:';
      }
      // @ts-expect-error
      setMessages([...newMessages, { type: 'bot', content: botResponse }]);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[100px] pb-12 box-border max-w-full text-left text-5xl text-black font-h3 mq750:pl-[50px] mq750:pr-[50px] mq750:pb-[31px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-whitesmoke border-gray-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-14 pb-12 pl-[49px] pr-[13px] gap-9 max-w-full lg:pl-6 lg:box-border mq750:gap-[18px] mq750:pt-9 mq750:pb-[31px] mq750:box-border">
        <div id="chat-container" className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full overflow-y-auto" style={{maxHeight: '60vh'}}>
          {messages.map((message, index) => (
            <div key={index} className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full ${message.type === 'user' ? 'justify-end' : ''}`}>
              {message.type === 'bot' && (
                <Image
                  className="h-[43px] w-6 relative"
                  loading="lazy"
                  width={24}
                  height={43}
                  alt=""
                  src="/frame-19.svg"
                />
              )}
              <div className={`flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[741px] max-w-full mq1050:min-w-full ${message.type === 'user' ? 'items-end' : ''}`}>
                <div className={`self-stretch rounded-6xs flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full ${message.type === 'user' ? 'bg-cornflowerblue-100' : ''}`}>
                  <div className={`w-[462px] relative font-medium inline-block shrink-0 max-w-full mq450:text-lgi ${message.type === 'user' ? 'text-white' : ''}`}>
                    {message.content}
                    {message.type === 'bot' && message.content.includes('следующие результаты') && (
                      <>
                        <ul className="m-0 font-inherit text-inherit pl-8">
                          <li className="mb-0">
                            <a
                              className="text-[inherit]"
                              href="https://мсп.рф/services/leasing/?proactive=106393058"
                              target="_blank"
                            >
                              <span className="[text-decoration:underline]">
                                Лизинг для бизнеса
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-[inherit]"
                              href="https://мсп.рф/services/competence-credit/promo/"
                              target="_blank"
                            >
                              <span className="[text-decoration:underline]">
                                Центр поддержки инвестиционного кредитования
                              </span>
                            </a>
                          </li>
                        </ul>
                        <div className="flex flex-row items-start justify-start gap-[13px] text-base text-gray font-text-paragraph">
                          <div className="relative leading-[26px] inline-block underline min-w-[77px]">
                            Сравнить
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {message.type === 'user'}
            </div>
          ))}
          {isLoading && (
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full">
              <Image
                className="h-[43px] w-6 relative"
                loading="lazy"
                width={24}
                height={43}
                alt=""
                src="/frame-19.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[741px] max-w-full mq1050:min-w-full">
                <div className="self-stretch rounded-6xs flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                  <div className="w-[462px] relative font-medium inline-block shrink-0 max-w-full mq450:text-lgi">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[1140px] flex flex-col items-start justify-start gap-6 max-w-full text-center text-xl text-gray-100">
          <div className="w-[338px] flex flex-row items-start justify-start flex-wrap content-start gap-6 max-w-full">
            <div className="w-[119px] rounded-6xs bg-cornflowerblue-100 flex flex-row items-start justify-start py-3 pl-3 pr-[11px] box-border">
              <div className="flex-1 relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                обучение
              </div>
            </div>
            <div className="flex-1 rounded-6xs bg-cornflowerblue-100 flex flex-row items-start justify-start py-3 pl-3 pr-[11px] box-border min-w-[127px]">
              <div className="flex-1 relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                финансирование
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-sm bg-white flex flex-row items-center justify-between py-3 px-4 gap-5 text-left text-lg text-darkgray font-text-paragraph mq450:flex-wrap">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Введите своё сообщение"
              className="w-[223px] flex-1 relative leading-[26px] font-medium bg-transparent border-none outline-none"
            />
            <Image
              className="h-[41px] w-[41px] relative cursor-pointer"
              width={41}
              height={41}
              alt=""
              src="/button.svg"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

