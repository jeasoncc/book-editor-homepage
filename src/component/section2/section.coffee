import $ from 'jquery'
import section from './section.html'

export section2Init = () -> 
    $("#fullpage").append($(section))
