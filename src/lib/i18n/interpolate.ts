type Values = Record<string, string>;

export function interpolate(text: string, values: Values) {
    const replaceKey = (match: string, key: string) => values[key] ?? match;
    return text.replace(/\{(\w+)\}/g, replaceKey);
}
