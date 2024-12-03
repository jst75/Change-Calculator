function calculateChange() {
    const saleAmount = parseFloat((document.getElementById('saleAmount').value)).toFixed(2);
    const amountTendered = parseFloat((document.getElementById('amountTendered').value)).toFixed(2);
    let change = (amountTendered - saleAmount).toFixed(2);
    
    const dollars = Math.floor(change);
    change = ((change - dollars) * 100).toFixed(2);
    const quarters = Math.floor(change / 25);
    change = (change % 25).toFixed(2);
    const dimes = Math.floor(change / 10);
    change = (change % 10).toFixed(2);
    const nickels = Math.floor(change / 5);
    const pennies = Math.round(change % 5);

    document.getElementById('dollars').innerText = dollars;
    document.getElementById('quarters').innerText = quarters;
    document.getElementById('dimes').innerText = dimes;
    document.getElementById('nickels').innerText = nickels;
    document.getElementById('pennies').innerText = pennies;
}