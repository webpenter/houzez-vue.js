export const formatTextWithNumber = (number, text) => {
    if (number > 1) {
        if (text.endsWith('y')) {
            return `${number} ${text.slice(0, -1)}ies`;
        }
        return `${number} ${text}s`;
    }
    return `${number} ${text}`;
}
