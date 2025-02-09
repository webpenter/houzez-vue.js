export const subStr = (content, start, length) => {
    if (!content) return "";

    if (content.length >= length) {
      return content.substr(start, length).concat("...");
    } else {
      return content;
    }
  };
  