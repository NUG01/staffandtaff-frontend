export default function useCheckRequired({ parentClass }) {
    let validated = true

    document
        .querySelector(`.${parentClass}`)
        .querySelectorAll('.required-record')
        .forEach(inp => {
            if (inp.value === '') {
                if (inp.type === 'file') {
                    inp.parentNode.classList.add('inputParentError')
                } else if (inp.tagName === 'TEXTAREA') {
                    inp.classList.add('input-error')
                    inp.parentNode.classList.add('input-error')
                } else if (inp.classList.contains('hidden-city-inp')) {
                    if (inp.value === '') {
                        document
                            .querySelector('.shown-city-inp')
                            .classList.add('input-error')
                    }
                } else {
                    inp.classList.add('input-error')
                }
                validated = false
            }
        })

    return validated
}
