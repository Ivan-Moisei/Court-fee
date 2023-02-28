function propertyCommercialFeeLegal(claim, result, minimum) {
    let fee = (claim * 1.5) / 100;
    if (fee <= minimum) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else if (fee >= (minimum * 350)) {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${minimum * 350} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    } else {
        result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">1,5 відсотка ціни позову, але не менше 1 розміру прожиткового мінімуму для працездатних осіб і не більше 350 розмірів прожиткового мінімуму для працездатних осіб</p>`;
    }
}

function nonPropertyCommercialFee(result, minimum) {  
    let fee = minimum;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
}

function provesCommercialFee(result, minimum) {  
    let fee = (minimum * 0.5);
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">0,5 розміру прожиткового мінімуму для працездатних осіб</p>`;
}

function appealCommercialFee(firstFee, result) {  
    let fee = (firstFee * 150) / 100;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">150 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги</p>`;
}

function cassationCommercialFee(firstFee, result) {  
    let fee = (firstFee * 200) / 100;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee.toFixed(2)} гривень</p><p class="count__info">200 відсотків ставки, що підлягала сплаті при поданні позовної заяви, іншої заяви і скарги</p>`;
}

function resolutionCommercialFee(result, minimum) {  
    let fee = minimum;
    result.innerHTML = `<p class="count__sum">Судовий збір:</p><p class="count__result">${fee} гривень</p><p class="count__info">1 розмір прожиткового мінімуму для працездатних осіб</p>`;
}

function actionCommercial(action, claim, result, minimum, firstFee) {
    switch (action) {
        case "property":
            propertyCommercialFeeLegal(claim, result, minimum);
            break;
        case "non-property":
            nonPropertyCommercialFee(result, minimum);
            break;
        case "proves":
            provesCommercialFee(result, minimum);
            break;
        case "appeal":
            appealCommercialFee(firstFee, result);
            break;
        case "cassation":
            cassationCommercialFee(firstFee, result);
            break;
        case "resolution":
            resolutionCommercialFee(result, minimum);
            break;
    }
}