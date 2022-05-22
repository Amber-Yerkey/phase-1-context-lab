/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map((e) => {
        return e.date
    })

    const payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate.call(this, d)
    }, 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(array) {
    const result = array.map(record => {
        return createEmployeeRecord(record)
    })
    return result
}

function createTimeInEvent(date) {
    this.timeInEvents.push(createTimeEvent(date, 'TimeIn'))
    return this
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push(createTimeEvent(date, 'TimeOut'))
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}


function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(records, firstName){
    return records.find(record => record.firstName === firstName)
}

function calculatePayroll(records){
    return records.reduce((acc, record) => {
        return allWagesFor.call(record) + acc
    }, 0)
}



//Helpers
function createTimeEvent(date, type) {
    return {
        type,
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
}




