function calculateScore() {
    // Client Trust in the Real Estate Advisor
    const advisorQuestions = [
        'q1rating', 'q2rating', 'q3rating', 'q4rating', 'q5rating', 'q6rating'
    ];
    const advisorTotalElement = document.getElementById('totalAdvisor');
    let advisorTotal = 0;
    advisorQuestions.forEach(q => {
        const rating = parseInt(document.getElementById(q).value, 10);
        const scoreElement = document.getElementById(q.replace('rating', 'score'));
        scoreElement.value = rating;
        advisorTotal += rating;
    });
    advisorTotalElement.value = advisorTotal;

    // Client Trust in the Product
    const productQuestions = [
        'q7rating', 'q8rating', 'q9rating', 'q10rating', 'q11rating', 'q12rating'
    ];
    const productTotalElement = document.getElementById('totalProduct');
    let productTotal = 0;
    productQuestions.forEach(q => {
        const rating = parseInt(document.getElementById(q).value, 10);
        const scoreElement = document.getElementById(q.replace('rating', 'score'));
        scoreElement.value = rating;
        productTotal += rating;
    });
    productTotalElement.value = productTotal;

    // Client Trust in the Company
    const companyQuestions = [
        'q13rating', 'q14rating', 'q15rating', 'q16rating', 'q17rating', 'q18rating'
    ];
    const companyTotalElement = document.getElementById('totalCompany');
    let companyTotal = 0;
    companyQuestions.forEach(q => {
        const rating = parseInt(document.getElementById(q).value, 10);
        const scoreElement = document.getElementById(q.replace('rating', 'score'));
        scoreElement.value = rating;
        companyTotal += rating;
    });
    companyTotalElement.value = companyTotal;

    // Client Action Threshold
    const actionQuestions = [
        'q19rating', 'q20rating', 'q21rating', 'q22rating', 'q23rating', 'q24rating'
    ];
    const actionTotalElement = document.getElementById('totalAction');
    let actionTotal = 0;
    actionQuestions.forEach(q => {
        const rating = parseInt(document.getElementById(q).value, 10);
        const scoreElement = document.getElementById(q.replace('rating', 'score'));
        scoreElement.value = rating;
        actionTotal += rating;
    });
    actionTotalElement.value = actionTotal;

    // Client Pain/Pleasure Threshold
    const painPleasureQuestions = [
        'q25rating', 'q26rating', 'q27rating', 'q28rating', 'q29rating','q30rating'
    ];
    const painPleasureTotalElement = document.getElementById('totalPainPleasure');
    let painPleasureTotal = 0;
    painPleasureQuestions.forEach(q => {
        const rating = parseInt(document.getElementById(q).value, 10);
        const scoreElement = document.getElementById(q.replace('rating', 'score'));
        scoreElement.value = rating;
        painPleasureTotal += rating;
    });
    painPleasureTotalElement.value = painPleasureTotal;

    // Calculate final score
    const finalScore = (advisorTotal + productTotal + companyTotal + actionTotal + painPleasureTotal) / 5;
    document.getElementById('finalScore').value = finalScore;

    // Generate recommendation
    generateRecommendation(finalScore);
}

function generateRecommendation(finalScore) {
    let recommendation;
    if (finalScore >= 15) {
        recommendation = "CLIENT WILL DEFINETLY BUY";
    } else if (finalScore >= 12) {
        recommendation = "ClIENT MAY LIKELY BUY";
    } else if (finalScore >= 10) {
        recommendation = "CLIENT NEEDS MORE PERSPECTING";
    } else if (finalScore <= 9) {
        recommendation = "CLIENT WILL NOT BUY";
    } else {
        recommendation = "PASS";
    }
    document.getElementById('recommendation').value = recommendation;
}

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
    calculateScore();
});
