export function addClass(el: any, className: string) {
    if (hasClass(el, className)) {
        return;
    }
    el.classList.add(className)
}

export function hasClass(el: any, className: string) {
    return el.classList.contains(className)
}

let elementStyle = document.createElement('div').style;

let vendor = (() => {
    let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };

    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key
        }
    }

    return false
})();

export function prefixStyle(style: string) {
    if (vendor === false) {
        return ''
    }

    if (vendor === 'standard') {
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}