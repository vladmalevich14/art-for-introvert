export const capitalizeFirstLetter = (sentence: string) => {
    if (!sentence) return sentence;

    let wordsArray = sentence.split(' ');

    wordsArray[0] = wordsArray[0].charAt(0).toUpperCase() + wordsArray[0].slice(1);

    return wordsArray.join(' ');
}
