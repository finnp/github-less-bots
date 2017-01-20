var bots = [
  'greenkeeperio-bot'
]

document.querySelectorAll('div.alert').forEach(function (element) {
  var isBot = element.querySelector('.bot-identifier')
  if (!isBot) {
    isBot = bots.some(function (bot) {
      return element.querySelector(`a[href="/${bot}"]`)
    })
  }
  if (isBot) element.style.display = 'none'
})
