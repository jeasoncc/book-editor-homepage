import React, {useRef, useEffect, useState, useCallback} from "react";
// import {mojs} from "@mojs/core";
import Image from 'next/image'
import imgUrl from "./../assert/image/山脉星空.svg";
import Typed from 'typed.js';
/**
 * Usage:
 * import MojsExample from './MojsExample';
 *
 * <MojsExample duration={1000}/>
 */
const title = {
    strings: [
        '<span>还在为寻找一款更合适的码字软件而烦恼吗？</span>',
        '<span>还是说，市面上的码字软件，都不怎么合乎你的心意？</span>',
        '「小密圈码字」，为创造式写作而设计',
        '极致简洁，极致优雅。',
        '在这里，忘记那些冗余的功能，沉浸在创造式写作的愉悦感里。',
        '让我们一起，来共同创造一个伟大的故事吧！'
    ],
    typeSpeed: 150
};
const MojsExample = ({duration}) => {
    const inputEl = useRef(null);
    useEffect(() => {
        var typed = new Typed(inputEl.current, title);
        console.log(inputEl.current)
    }, [])

    return (
        <>
            <section  className="px-4  mx-auto  section w-screen h-screen flex items-center">
                <div className="w-full mx-auto md:w-5/6">
                    <div className="text-left md:text-center">
                        <h1 className="mb-8 text-s font-bold tracking-widest text-purple-800 uppercase md:leading-snug md:text-3xl">
                            <span ref={inputEl} id="title"></span>
                        </h1>
                    </div>
                    <div className="flex items-center justify-start md:justify-center">
                        <div className="avatar w-40">
                            <Image src={imgUrl} alt="Photo of Praveen Juge"/>
                        </div>
                        <div className="ml-4">
                            <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">柳堂先生</p>
                            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">一个致力于寻找科技、设计和文字三者结合的文字爱好者</p>
                            <p className="text-xs font-semibold tracking-widest text-gray-500 ">联系作者：chinavzz(微信)）</p>
                            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">公众号
                                          网文小密圈（提供飞卢数据订阅功能，分享网文教程，分享自己的产品）
                            </p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 justify-evenly">
                        <a href="https://gitee.com/jeasonchen/small-dense-circle-writing/attach_files/884266/download/%E5%B0%8F%E5%AF%86%E5%9C%88%E7%A0%81%E5%AD%97%20Setup%200.0.64.exe" className="transform hover:scale-105 duration-1000 inline-block text-center bg-indigo-600 border border-transparent rounded-full py-3 px-8 font-medium text-white hover:bg-indigo-700">
                            WIN64位 下载</a>
                        <button disabled className="transform  duration-1000 inline-block text-center border border-transparent rounded-full py-3 px-8 font-medium text-white bg-gray-400">
                            MAC 下载</button>
                        <a href="https://gitee.com/jeasonchen/small-dense-circle-writing/attach_files/884234/download/xiaomiquan_0.0.64_amd64.deb" className="transform hover:scale-105 duration-1000 inline-block text-center bg-indigo-600 border border-transparent rounded-full py-3 px-8 font-medium text-white hover:bg-indigo-700">LINUX
                                    DEB 下载</a>
                        <a href="https://gitee.com/jeasonchen/small-dense-circle-writing/attach_files/884225/download/xiaomiquan-0.0.64.x86_64.rpm" className="transform hover:scale-105 duration-1000 inline-block text-center bg-indigo-600 border border-transparent rounded-full py-3 px-8 font-medium text-white hover:bg-indigo-700">LINUX
                                    RPM 下载</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MojsExample;
