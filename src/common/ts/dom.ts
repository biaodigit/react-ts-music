export function addClass(el: any, className: string) {
    if (hasClass(el, className)) {
        return;
    }
    el.classList.add(className)
}

export function hasClass(el: any, className: string) {
    return el.classList.contains(className)
}