export const formatTextWithNumber = (number, text) => {
    if (number > 1) {
        return `${number} ${text}s`;
    } else {
        return `${number} ${text}`;
    }
}