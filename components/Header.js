import Link from 'next/link'
const HeaderComponent = ({duration}) => {

    return (
        <>
            <header className="text-gray-600 body-font fixed w-full">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">小密圈写作</span>
                        </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/develp-plan">
                            <a href="version" className="mr-5 hover:text-gray-900">开发计划</a>
                        </Link>
                        <Link href="/download">
                            <a className="mr-5 hover:text-gray-900">下载</a>
                        </Link>
                        <Link href="/about-author"> 
                            <a className="mr-5 hover:text-gray-900">关于作者</a>
                        </Link>
                        <Link href="/about-author"> 
                            <a className="mr-5 hover:text-gray-900">特别感谢</a>
                        </Link>
                        <Link href="/version">
                            <a className="mr-5 hover:text-gray-900">版本更新记录</a>
                        </Link>

                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">了解更多
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

export default HeaderComponent;
