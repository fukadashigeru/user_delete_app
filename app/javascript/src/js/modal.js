document.addEventListener('click', (e) => {
  const clicked = e.target.closest('[data-modal-open]')
  if (clicked) {
    const targetSelector = clicked.getAttribute('data-modal-open')
    const target = document.querySelector(targetSelector)
    if (target) {
      target.classList.remove('hidden')
    }
  }
})

document.addEventListener('click', (e) => {
  const clicked = e.target.closest('[data-modal-close]')
  if (clicked) {
    const targetSelector = clicked.getAttribute('data-modal-close')
    if (targetSelector) {
      const target = document.querySelector(targetSelector)
      if (target) {
        target.classList.add('hidden')
      }
    } else {
      const target = clicked.closest('[data-modal]')
      if (target) {
        target.classList.add('hidden')
      }
    }
  }
})


