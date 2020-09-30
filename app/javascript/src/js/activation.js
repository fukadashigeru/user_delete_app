document.addEventListener('input', (e) => {
    const input = e.target
    const targetSelector = input.dataset.activationTarget
    console.log(targetSelector)
    if (targetSelector) {
        const activationValue = input.dataset.activationValue
        const targets = document.querySelectorAll(targetSelector)
        if (input.value === activationValue) {
            targets.forEach((target) => {
                // .disabled クラスを取り除く
                target.classList.remove('disabled')
                target.removeAttribute('tabindex')
            })
        } else {
            targets.forEach((target) => {
                // .disabled クラスを取り除く
                target.classList.add('disabled')
                target.setAttribute('tabindex', -1)
            })
        }
    }
})
