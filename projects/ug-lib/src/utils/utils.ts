export function* range(beg: number, end: number, step: number = 1) {
    for (let i = 0; i < end; i += step) {
        yield i;
    }
}

export function randomInt() {
    return Math.round(Math.random() * 100);
}


export function deepClone<K>(a: K): K {
    // 这个没法deepClone
    return JSON.parse(JSON.stringify(a));
}
