function interpretTimeTable(strTable) {
    const arr = strTable.split("\n").map(str => {

        if (str.match(/^\d+:\d+$/)) {
            const times = str.split(":");
            const now = dateNow();
            return new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                hours = times[0],
                minutes = times[1]
            );
        } else {
            return str;
        }
        
    });

    let formatedTable = [];
    for (let i = 0; i < arr.length - 2; i += 2) {
        formatedTable.push({
            start: arr[i],
            label: arr[i + 1],
            end: arr[i + 2]
        });
    }

    return formatedTable;
}

function findCurrentPeriod(timetable, currentDate = dateNow()) {
    return timetable.find(period => period.end.getTime() > currentDate.getTime());
}

function timeUntilPeriodEnd(period, date = dateNow()) {
	return new Date(period.end.getTime() - date.getTime());
}