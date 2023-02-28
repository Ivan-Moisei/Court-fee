function propertyAdminFeeLegal(claim, result, minimum) {
    let fee = (claim * 1.5) / 100;
    if (fee <= minimum) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 10 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else if (fee >= (minimum * 10)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 10} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 10 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 10 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function propertyAdminFeeIndividual(claim, result, minimum) {
    let fee = (claim * 1) / 100;
    if (fee <= (minimum * 0.4)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${(minimum * 0.4).toFixed(2)} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else if (fee >= (minimum * 5)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 5} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function nonPropertyAdminFeeIndividual(result, minimum) {  
    let fee = (minimum * 0.4).toFixed(2);
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,4 розміру прожиткового мінімуму для працездатних осіб</p>`;
}

function nonPropertyAdminFeeLegal(result, minimum) {  
    let fee = minimum;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
}

function provesAdminFee(result, minimum) {  
    let fee = (minimum * 0.3).toFixed(2);
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,3 розміру прожиткового мінімуму для працездатних осіб</p>`;
}

function appealAdminFee(firstFee, result, minimum) {  
    let fee = (firstFee * 150) / 100;
    if (fee >= (minimum * 15)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 15} гривень</p><p class="count__info">150 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги, але не більше 15 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">150 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги, але не більше 15 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function cassationAdminFee(firstFee, result, minimum) {  
    let fee = (firstFee * 200) / 100;
    if (fee >= (minimum * 20)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 20} гривень</p><p class="count__info">200 відсотків ставки, що підлягала сплаті при поданні позовної заяви, але не більше 20 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">200 відсотків ставки, що підлягала сплаті при поданні позовної заяви, але не більше 20 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function resolutionAdminFee(result, minimum) {  
    let fee = minimum;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
}

function actionAdmin(action, payer, claim, result, minimum, firstFee) {
    switch (action) {
        case "property":
            if (payer === "legal-person") {
                propertyAdminFeeLegal(claim, result, minimum);
            } else {
                propertyAdminFeeIndividual(claim, result, minimum);
            };
            break;
        case "non-property":
            if (payer === "individual") {
                nonPropertyAdminFeeIndividual(result, minimum);
            } else {
                nonPropertyAdminFeeLegal(result, minimum);
            }
            break;
        case "proves":
            provesAdminFee(result, minimum);
            break;
        case "appeal":
            appealAdminFee(firstFee, result, minimum);
            break;
        case "cassation":
            cassationAdminFee(firstFee, result, minimum);
            break;
        case "resolution":
            resolutionAdminFee(result, minimum);
            break;
    }
}