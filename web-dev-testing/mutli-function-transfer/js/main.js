
function transferButton() {
    ss = SpreadsheetApp.getActiveSpreadsheet()
    s = ss.getActiveSheet()
    ui = SpreadsheetApp.getUi()
    
    let subaruCardNewBalance = s.getRange('K1').getFormula()
    let malachiNewBalance = s.getRange('H1').getFormula()
    let nicoleNewBalance = s.getRange('H2').getFormula()
    
    let subaruCardCurrBalance = s.getRange('K1').getValue()
    let malachiCurrBalance = s.getRange('H1').getValue()
    let nicoleCurrBalance = s.getRange('H2').getValue()

    let achFee = s.getRange('J2').getValue()
    let transferAmount = s.getRange('K2').getValue()
    let transferType=s.getRange('I1:J1').getValue()

    switch (transferType) {
        //Transfer subaru card balance to Malachi
        case 'Subaru Card Balance':
            if (transferAmount <= 0)  {
                ui.alert('You can\'t transfer $0!')
            } else if (transferAmount <= (subaruCardCurrBalance - achFee)) {
                s.getRange('K1').setValue(`${subaruCardNewBalance} - ${achFee+transferAmount}`)
                s.getRange('K2').setValue(0)
                s.getRange('H1').setValue (`${malachiNewBalance} + ${transferAmount}`)
            } else {
              ui.alert('Insufficient funds!')
            }
            break;
        //Transfer from Nicole to Malachi
        case 'Transfer to Malachi':
            s.getRange('J2').setValue(0)
            if (transferAmount <= 0) {
                ui.alert('You can\'t transfer $0!')
            } else if (transferAmount <= nicoleCurrBalance) {
                s.getRange('K2').setValue(0)
                s.getRange('H1').setValue(`${malachiNewBalance} + ${transferAmount}`)
                s.getRange('H2').setValue(`${nicoleNewBalance} - ${transferAmount}`)
            } else {
              ui.alert('Insufficient funds!')
            }
            break;
        //Transfer from Malachi to Nicole
        case 'Transfer to Nicole':
            if (transferAmount <= 0) {
                ui.alert('You can\'t transfer $0!')
            } else if (transferAmount <= malachiCurrBalance) {
                s.getRange('K2').setValue(0)
                s.getRange('H2').setValue(`${nicoleNewBalance} + ${transferAmount}`)
                s.getRange('H1').setValue(`${malachiNewBalance} - ${transferAmount}`)
            } else {
              ui.alert('Insufficient funds!')
            }
            break;
    }
}
