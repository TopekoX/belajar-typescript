let sportsOne: string[] = ["Golf", "Swiming", "Tennis", "Football"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// lets use simplied for loop
for(let tempSport of sportsOne) {

    if(tempSport == "Tennis") {
        console.log(tempSport + " << My Favorite Sport");
        
    } else {
        console.log(tempSport);
    }

}