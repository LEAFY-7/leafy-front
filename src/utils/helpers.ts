export function colorSelector(key, token) {
    return token.find((t) => t.description === key).value;
}
