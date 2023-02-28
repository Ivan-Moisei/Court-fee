const actionSelect = document.querySelector('.action');
const firstFeeInput = document.querySelector('.first-fee');
const claimInput = document.querySelector('.claim');

actionSelect.addEventListener('change', () => {
    if (actionSelect.value === 'appeal') {
        firstFeeInput.style.display = 'block';
    } else if (actionSelect.value === 'cassation') {
        firstFeeInput.style.display = 'block';
    } else {
        firstFeeInput.style.display = 'none';
    }
});

actionSelect.addEventListener('change', () => {
    if (actionSelect.value === 'property') {
        claimInput.style.display = 'block';
    } else {
        claimInput.style.display = 'none';
    }
});

function countFee() {
    const court = document.getElementById('court').value;
    const payer = document.getElementById('payer').value;
    const action = document.getElementById('action').value;
    const firstFee = document.getElementById('first-fee').value;
    const claim = document.getElementById('claim').value;
    const result = document.querySelector('.result');
    const minimum = 2684;

    switch (court) {
        case "general":
            actionGeneral(action, payer, claim, result, minimum, firstFee);
            break;
        case "commercial":
            actionCommercial(action, claim, result, minimum, firstFee);
            break;
        case "admin":
            actionAdmin(action, payer, claim, result, minimum, firstFee);
            break;
    }        
}