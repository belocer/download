window.addEventListener('load', () => {
  let btn

  document.body.addEventListener('click', (e) => {
    btn = e.target || e.srcElement
    setInterval(function () {
      let click = new CustomEvent('click')
      btn.dispatchEvent(click)
    }, 1000)
  })
})