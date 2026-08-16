/**
 * @param {string[]} sentences
 * @return {number}
 * Time Complexity: O(N * M) where N is sentences length and M is sentence length
 * Space Complexity: O(1) auxiliary space
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        let currentWords = 1;

        // Scan characters directly to prevent regex or array allocation overhead
        for (let j = 0; j < sentence.length; j++) {
            if (sentence[j] === ' ') {
                currentWords++;
            }
        }

        if (currentWords > maxWords) {
            maxWords = currentWords;
        }
    }

    return maxWords;
};
