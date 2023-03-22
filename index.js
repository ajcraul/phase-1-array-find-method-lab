/* code your solution here
function superbowlWin(arrayObject) {
    const record = [{
        year: "2015",
        result: "W"
    },
    {
        year: "2014",
        result: "N/a"
    },
    {
        year: "2013",
        result: "L"
    },
    ]   
}

array.prototype.find(result); */

superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
}
