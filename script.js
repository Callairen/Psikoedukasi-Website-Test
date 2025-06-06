document.getElementById('submitBtn').addEventListener('click', function() {
    // Calculate score
    let score = 0;
    const totalQuestions = 20; // Update this if question count changes
    
    // Check if all questions are answered
    let allAnswered = true;
    
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedOption) {
            allAnswered = false;
            break;
        }
        score += parseInt(selectedOption.value);
    }

    if (!allAnswered) {
        alert('Silakan jawab semua pertanyaan terlebih dahulu!');
        return;
    }

    // Redirect based on score
    if (score >= 0 && score <= 10) {
        window.location.href = "low.html";
    } else if (score >= 11 && score <= 15) {
        window.location.href = "met.html";
    } else if (score >= 16 && score <= 20) {
        window.location.href = "high.html";
    }

   

});

 document.getElementById("scrollButton").addEventListener("click", function () {
    document.getElementById("questionbang").scrollIntoView({ behavior: 'smooth' });
});