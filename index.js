// Code your solution in this file!

const positionOfHq = 42

function distanceFromHqInBlocks(pickupPoint) {
    if (pickupPoint > 42) {
        //console.log(pickupPoint - positionOfHq)
        return pickupPoint - positionOfHq

    } else {
        //console.log(positionOfHq - pickupPoint)
        return positionOfHq - pickupPoint
    }
}


function distanceFromHqInFeet(pickupPoint){
    
    const result = distanceFromHqInBlocks(pickupPoint)
    return result * 264

}

function distanceTravelledInFeet(start, destination) {
    
    if (start > destination) {
        
        return (start - destination) * 264

    } else {

        return (destination - start) * 264
        
    }
}

function calculatesFarePrice(start, destination) {

    const feet = distanceTravelledInFeet(start, destination)

    if (feet <= 400) {
        return 0
    } else if(feet > 400 && feet <= 2000) {
        
        return 0.02 * (feet - 400)

    } else if (feet > 2000 && feet < 2500){

        return 25 

    } else if (feet > 2500){

        return 'cannot travel that far'
    }
    
}

