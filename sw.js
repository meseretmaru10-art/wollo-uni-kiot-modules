function viewPDF(fileName) {
    // ኦንላይን መሆኑን ያረጋግጣል
    const isOnline = navigator.onLine;

    if (isOnline) {
        // ኦንላይን ሲሆን በ Google Viewer (ጥራት ላለው እይታ)
        const fileUrl = "https://meseretmaru10-art.github.io/wollo-uni-kiot-modules/" + fileName;
        window.location.href = fileUrl; // ቀጥታ ሊንኩን ይከፍታል
    } else {
        // ያለ ዳታ (Offline) ሲሆን በስልኩ እንዲከፍት
        const overlay = document.getElementById('pdf-overlay');
        const iframe = document.getElementById('pdf-frame');
        const main = document.getElementById('main-content');

        iframe.src = fileName; // በስሙ ብቻ (ከCache ያመጣዋል)
        overlay.style.display = 'block';
        main.style.display = 'none';
        window.history.pushState({ pdfOpen: true }, "");
    }
}
