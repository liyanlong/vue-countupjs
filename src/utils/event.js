
export const animationEnd = (function () {
  let eleStyle = document.createElement('div').style
  let verdors = ['a', 'webkitA', 'MozA', 'OA', 'msA']
  let endEvents = ['animationend', 'webkitAnimationEnd', 'animationend', 'oAnimationEnd', 'MSAnimationEnd']
  let animation
  for (let i = 0, len = verdors.length; i < len; i++) {
      animation = verdors[i] + 'nimation'
      if (animation in eleStyle) {
          return endEvents[i]
      }
  }
  return 'animationend'
})()
