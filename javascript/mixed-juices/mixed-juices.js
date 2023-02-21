export function timeToMixJuice(name) {
    let result = 0
    switch (name) {
        case 'Pure Strawberry Joy':
            result = 0.5
            break;
        case 'Energizer':
        case 'Green Garden':
            result = 1.5
            break;
        case 'Tropical Island':
            result = 3
            break;
        case 'All or Nothing':
            result = 5
            break;
        default:
            result = 2.5
            break;
    }
    return result
}
export function limesToCut(wedgesNeeded, limes) {
    if (wedgesNeeded === 0) {
        return 0
    }
    let totalWedges = 0;
    let numLimes = 0;
    for (let i = 0; i < limes.length; i++) {
        let wedges;
        switch (limes[i]) {
            case 'small':
                wedges = 6;
                break;
            case 'medium':
                wedges = 8;
                break;
            case 'large':
                wedges = 10;
                break;
        }
        while (wedges > 0 && totalWedges < wedgesNeeded) {
            totalWedges++;
            wedges--;
        }
        numLimes++;
        if (totalWedges >= wedgesNeeded) {
            break;
        }
    }
    return numLimes;
}
export function remainingOrders(timeLeft, orders) {
    let ordersLeft = orders
    while (timeLeft > 0) {
        timeLeft = timeLeft - timeToMixJuice(ordersLeft[0])
        ordersLeft.shift()
    }
    return ordersLeft;
}
