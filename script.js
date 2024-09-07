document.getElementById('alphabetize-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const words = inputText.split(/\s+/).filter(word => word.trim() !== ''); // Split by whitespace and filter out empty strings
    const sortedWords = words.sort((a, b) => a.localeCompare(b));
    document.getElementById('output-text').value = sortedWords.join('\n'); // Join words with line breaks
});
