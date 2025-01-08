var isArabicToEnglish = true; // Variable to track translation direction

function switchTranslation() {
    var inputPlaceholder = isArabicToEnglish ? "Enter English text..." : "Enter Arabic text...";
    var outputPlaceholder = isArabicToEnglish ? "Translated text will appear here..." : "سيظهر النص المترجم هنا";
    document.getElementById('inputText').placeholder = inputPlaceholder;
    document.getElementById('outputText').placeholder = outputPlaceholder;

    var englishBtn = document.getElementById('englishBtn');
    var ArabicBtn = document.getElementById('ArabicBtn');

    // Swap text content of buttons
    var tempText = ArabicBtn.textContent;
    ArabicBtn.textContent = englishBtn.textContent;
    englishBtn.textContent = tempText;

    // Swap onclick attributes of buttons
    var tempOnclick = englishBtn.getAttribute('onclick');
    englishBtn.setAttribute('onclick', ArabicBtn.getAttribute('onclick'));
    ArabicBtn.setAttribute('onclick', tempOnclick);

    isArabicToEnglish = !isArabicToEnglish; // Toggle translation direction
}
document.querySelector('.speech-btn').addEventListener('click', function() {
    var outputText = document.getElementById('outputText').value;
    var targetLang = isArabicToEnglish ? 'en-US' : 'ar-SA';
    speakText(outputText, targetLang);
});

function translateText() {
    var inputText = document.getElementById('inputText').value;
    var sourceLang = isArabicToEnglish ? 'ar' : 'en';
    var targetLang = isArabicToEnglish ? 'en' : 'ar';
    var apiUrl =`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var translatedText = data.responseData.translatedText;
            document.getElementById('outputText').value = translatedText;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function copyText(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function speakText(text, lang) {
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function clearInput() {
    document.getElementById('inputText').value = '';
}

function clearOutput() {
    document.getElementById('outputText').value = '';
}