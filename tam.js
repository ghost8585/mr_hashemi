const db = []
function addToDb(firstName, lastName, age, ghad, vazn) {
    db.push({ firstName, lastName, age, ghad, vazn })
}
addToDb("parham", "hashemi", "13", "165", "75")
addToDb("saeed", "goharRostami", "30", "175", "90")
addToDb("iliea", "yousefi", "16", "170", "70")

console.log(db)