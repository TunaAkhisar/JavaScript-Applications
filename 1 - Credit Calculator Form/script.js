function calculateCredit(){

    var withdrawnAmount ,listDuration;
    var monthlyInstallment,totalAmount;

    withdrawnAmount  = document.getElementById("txtCreditAmount").value

    var listDuration  = document.getElementById("listDuration").value

    let factor = listDuration / 12 
    let kt = `1.${factor}`
    let num = Number(kt)

    totalAmount = withdrawnAmount  * num
    monthlyInstallment = totalAmount / listDuration

    document.querySelector("#calculateLoanRepayment").innerHTML = "Refund total : "+totalAmount
    document.querySelector("#monthlyInstallment").innerHTML = "Monthly Installment : " + monthlyInstallment.toFixed(2)
}