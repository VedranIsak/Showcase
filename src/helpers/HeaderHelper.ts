const splitSentenceByWords = (sentence: string): [string, string, string] => {
    const words = sentence.trim().split(/\s+/);
    const n = words.length;

    const part1 = words.slice(0, Math.floor(n / 3)).join(' ');
    const part2 = words.slice(Math.floor(n / 3), Math.floor(2 * n / 3)).join(' ');
    const part3 = words.slice(Math.floor(2 * n / 3)).join(' ');
    return [part1, part2, part3];
}

export default splitSentenceByWords;