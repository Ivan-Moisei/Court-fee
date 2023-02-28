function propertyGeneralFeeLegal(claim, result, minimum) {
    let fee = (claim * 1.5) / 100;
    if (fee <= minimum) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else if (fee >= (minimum * 350)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 350} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function propertyGeneralFeeIndividual(claim, result, minimum) {
    let fee = (claim * 1) / 100;
    if (fee <= (minimum * 0.4)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${(minimum * 0.4).toFixed(2)} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else if (fee >= (minimum * 5)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 5} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">1 відсоток ціни позову, але не менше 0,4 розміру прожиткового мінімуму для працездатних осіб та не більше 5 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function nonPropertyGeneralFee(payer, result, minimum) {  
    let fee = 0;
    if (payer === "individual") {
       fee = (minimum * 0.4).toFixed(2);
       result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,4 розміру прожиткового мінімуму для працездатних осіб</p>`;
    } else {
       fee = minimum;
       result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function provesGeneralFee(payer, result, minimum) {  
    let fee = 0;
    if (payer === "individual") {
        fee = (minimum * 0.2).toFixed(2);
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,2 розміру прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        fee = (minimum * 0.5).toFixed(2);
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,5 розміру прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function appealGeneralFee(firstFee, result) {  
    let fee = (firstFee * 150) / 100;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">150 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги
    </p>`;
}

function cassationGeneralFee(firstFee, result) {  
    let fee = (firstFee * 200) / 100;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">200 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги</p>`;
}

function resolutionGeneralFee(payer, result, minimum) {  
    let fee = 0;
    if (payer === "individual") {
        fee = (minimum * 0.2).toFixed(2);
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,2 розміру прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        fee = minimum;
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function actionGeneral(action, payer, claim, result, minimum, firstFee) {
    switch (action) {
        case "property":
            if (payer === "legal-person") {
                propertyGeneralFeeLegal(claim, result, minimum);
            } else {
                propertyGeneralFeeIndividual(claim, result, minimum);
            };
            break;
        case "non-property":
            nonPropertyGeneralFee(payer, result, minimum);
            break;
        case "proves":
            provesGeneralFee(payer, result, minimum);
            break;
        case "appeal":
            appealGeneralFee(firstFee, result);
            break;
        case "cassation":
            cassationGeneralFee(firstFee, result);
            break;
        case "resolution":
            resolutionGeneralFee(payer, result, minimum);
            break;
    }
}