//Challenge 3: Net Salary Calculator (Toy Problem)
//PAYE tax, NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

const prompt = require('prompt-sync')();

const monthlyGrossPay = prompt("What is your monthly gross salary: ")

const tierNSSF = prompt("Do you have alternative pension scheme in place other than NSSF (answer: yes or no): ")

//function that calculates NHIF (National Hospital Insurance Fund)
function NHIFDeductions (NHIFRate) {
    if (monthlyGrossPay > 0 && monthlyGrossPay < 6000) {
        NHIFRate = 150
        return NHIFRate
    } else if (monthlyGrossPay >= 6000 && monthlyGrossPay < 8000) {
        NHIFRate = 300
        return NHIFRate
    } else if (monthlyGrossPay >= 8000 && monthlyGrossPay < 12000) {
        NHIFRate = 400
        return NHIFRate
    } else if (monthlyGrossPay >= 12000 && monthlyGrossPay < 15000) {
        NHIFRate = 500
        return NHIFRate
    } else if (monthlyGrossPay >= 15000 && monthlyGrossPay < 20000) {
        NHIFRate = 600
        return NHIFRate
    } else if (monthlyGrossPay >= 20000 && monthlyGrossPay < 25000) {
        NHIFRate = 750
        return NHIFRate
    } else if (monthlyGrossPay >= 25000 && monthlyGrossPay < 30000) {
        NHIFRate = 850
        return NHIFRate
    } else if (monthlyGrossPay >= 30000 && monthlyGrossPay < 35000) {
        NHIFRate = 900
        return NHIFRate
    } else if (monthlyGrossPay >= 35000 && monthlyGrossPay < 40000) {
        NHIFRate = 950
        return NHIFRate
    } else if (monthlyGrossPay >= 40000 && monthlyGrossPay < 45000) {
        NHIFRate = 1000
        return NHIFRate
    } else if (monthlyGrossPay >= 45000 && monthlyGrossPay < 50000) {
        NHIFRate = 1100
        return NHIFRate
    } else if (monthlyGrossPay >= 50000 && monthlyGrossPay < 60000) {
        NHIFRate = 1200
        return NHIFRate
    } else if (monthlyGrossPay >= 60000 && monthlyGrossPay < 70000) {
        NHIFRate = 1300
        return NHIFRate
    } else if (monthlyGrossPay >= 70000 && monthlyGrossPay < 80000) {
        NHIFRate = 1400
        return NHIFRate
    } else if (monthlyGrossPay >= 80000 && monthlyGrossPay < 90000) {
        NHIFRate = 1500
        return NHIFRate
    } else if (monthlyGrossPay >= 90000 && monthlyGrossPay < 100000) {
        NHIFRate = 1600
        return NHIFRate
    } else {
        NHIFRate = 1700
        return NHIFRate
    }
}
NHIFDeductions()

//function that calculates NSSF (National Social Security Fund) 
//TierI is a compulsory deduction 
//while, TierII is oprional for those with other pension schemes
//for those without alternative pension schemes, the deduction is a combination of TierI and TierII
function NSSFDeductions () {
    const lowerEarningsLimit = 6000
    const upperEarningsLimit = 18000
    const rate = 0.06

    //TierI has a maximum lower pensionable income limit of Ksh 6,000
    //As long as you earn gross monthly salary above 6000, it will be a standard pensionable pay of 6,000 
    if (tierNSSF === 'yes' || tierNSSF === 'Yes') {
        function tierI () {
            if (monthlyGrossPay <= lowerEarningsLimit) {
                return monthlyGrossPay * rate
            } else {
                return lowerEarningsLimit * rate
            }
        }
        return tierI()    
    //Any gross monthly income below 6000 is not charged tier II
    //TierII has a maximum upper pensionable income limit of Ksh 18,000
    //Income between 6000 and 18000, it is calculated as gross income - lower limit(6000)
    //the difference is what is considered pensionable
    //e.g gross of 16,000 - 6000 = 10,000 * 6%
    } else if (tierNSSF === 'no' || tierNSSF === 'No') {
        function tierII () {
            let pensionableEarnings
            let tier2
            if (monthlyGrossPay <= lowerEarningsLimit) {
                return 0 + (monthlyGrossPay * rate)
            } else if (monthlyGrossPay > lowerEarningsLimit && monthlyGrossPay <= upperEarningsLimit) {
                pensionableEarnings = monthlyGrossPay - lowerEarningsLimit
                tier2 = pensionableEarnings * rate
                return tier2 + (lowerEarningsLimit * rate)
            } else if (monthlyGrossPay > upperEarningsLimit) {
                pensionableEarnings = upperEarningsLimit - lowerEarningsLimit
                tier2 = pensionableEarnings * rate
                return tier2 + (lowerEarningsLimit * rate)
            }
        }   
        return tierII()
    }
}
NSSFDeductions()

//Function that calulates taxable income. This is what PAYE calculates
function taxablePay() {
    return monthlyGrossPay - NHIFDeductions() - NSSFDeductions()
}
taxablePay()

//function that calulates PAYE (Pay As You Earn) Tax
//taxable income less than 24000 is not taxed.
//This is because of the standard personal relief of 2,400 which is deducted after PAYE tax is calculated
//i.e when a taxabincome of 24,000 is taxed at 10% = 2,400 - tax relief giving 0 tax
//PAYE is calculated in 3 different ranges
// range1: up to 24,000 - 10%
// range2: between 24,001 and 32,333 - 25%
// range3: above 32,333 - 30%
function monthlyPAYE(PAYEDeduction) {
    const taxRelief = 2400
    if (taxablePay() > 0 && taxablePay() <= 24000) {
        return 0
    } else if (taxablePay() >= 24001 && taxablePay() <= 32333) {
        let tenPercentTax = 24000 * 0.1
        let twentyFivePercentTax = (taxablePay() - 24000) * 0.25
        //Math.round is used to round off to the nearest integer
        return Math.round(tenPercentTax + twentyFivePercentTax) - taxRelief
    } else {
        let tenPercentTax = 24000 * 0.1
        let twentyFivePercentTax = (32333 - 24000) * 0.25
        let thirtyPercentTax = (taxablePay() - 32333) * 0.3
        return Math.round(tenPercentTax + twentyFivePercentTax + thirtyPercentTax) - taxRelief
    }
}
monthlyPAYE()

//Function that calculates net salary by deducting PAYE, NHIF and NSSF from Gross Salary
function netSalary(gross, nhif, nssf,taxablePaye, paye) {
    const total = gross - paye - nhif - nssf
    return `NHIF deductions = ${nhif}\nNSSF deduction = ${nssf}\nTaxable Pay = ${taxablePaye}\nPAYE tax = ${paye}\nNet Salary = ${total}`
}
console.log(netSalary(monthlyGrossPay, NHIFDeductions(), NSSFDeductions(), taxablePay(), monthlyPAYE()))
