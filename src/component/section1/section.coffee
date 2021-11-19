import $ from 'jquery'
import section from './section.html'
import Typed from 'typed.js';

export section1Init = () -> 
    title = {
        strings: ['<span>还在为寻找一款更合适的码字软件而烦恼吗？</span>',
                    '<span>还是说，市面上的码字软件，都不怎么合乎你的心意？</span>',
                    '「小密圈码字」，为创造式写作而设计',
                    '极致简洁，极致优雅。'
                    '在这里，忘记那些冗余的功能，沉浸在创造式写作的愉悦感里。'
                    '让我们一起，来共同创造一个伟大的故事吧！'],
        typeSpeed: 150
    };
    $("#fullpage").append($(section))
    typed = new Typed('#title', title);