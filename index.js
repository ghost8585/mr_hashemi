const db=[]
function addToDb(firstName,lastName,age,vazn,ghad,) {
    db.push({firstName,lastName,age,vazn,ghad,})
}
addToDb("parham","hashemi" ,"19","74","165")
addToDb("saeed","rostami","18","100","175")
addToDb("sharyar","lotfi","17","45","150")
addToDb("iliea","yousefi","16","60","170")
addToDb("amir","ansari","15","100","170")
addToDb("maryam","ghasemi","14","80","150")

console.log(db)