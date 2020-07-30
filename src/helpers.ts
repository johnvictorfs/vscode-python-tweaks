export const countCharacters = (char: string, text: string): number => {
  /**
   * Counts the number of appearences of a specific character inside a string
   * 
   * https://stackoverflow.com/a/40064897/10416161
   */
  return text.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
}

export const isString = (text: string): boolean => {
  const stringChars = ["'", '"']

  for (let i = 0; i < stringChars.length; ++i) {
    const char = stringChars[i]

    if (text.startsWith(char) && text.endsWith(char) && (countCharacters(char, text) % 2 === 0) ) {
      try {
        // Check if string is valid by correctly parsing it as a valid JSON string, replacing ' with " and escaping all inner "s
        const parsed = JSON.parse(char === "'" ? text.replace(/"/g, '\\"').replace(/'/g, '"'): text)

        if (String(parsed) === parsed) {
          return true
        }
      } catch(error) {}
    }
  }

  return false
}

export const isFString = (text: string): boolean => {
  /**
   * Checks if a string is a valid Python f-string or not
   */

  if (!text.startsWith('f')) {
    // F-strings need to start with f
    return false
  }

  // Rest of string after the f-string 'f'
  const rest = text.substr(1)

  const stringChars = ["'", '"']

  // Check if string is valid either with single or double quotes
  for (let i = 0; i < stringChars.length; ++i) {
    const char = stringChars[i]

    if (rest.startsWith(char) && rest.endsWith(char) && (countCharacters(char, rest) % 2 === 0)) {
      try {
        // Check if string is valid by correctly parsing it as a valid JSON string, replacing ' with " and escaping all inner "s
        const parsed = JSON.parse(char === "'" ? rest.replace(/"/g, '\\"').replace(/'/g, '"'): rest)

        if (String(parsed) === parsed) {
          return true
        }
      } catch(error) {}
    }
  }

  return false
}
