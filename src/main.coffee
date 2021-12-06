import fullpage from "fullpage.js"
import { section1Init } from "./component/section1/section.coffee"
import { section2Init } from "./component/section2/section.coffee"
section1Init()
section2Init()

fullpageConfig = 
	lockAnchors: false
	anchors:['firstPage', 'secondPage']
	navigation: false
	navigationPosition: 'right'
	navigationTooltips: ['firstSlide', 'secondSlide']
	showActiveTooltip: false
	slidesNavigation: false
	slidesNavPosition: 'bottom'


try
  new fullpage('#fullpage', fullpageConfig)
catch error
  "And the error is ... #{error}"
# )

