function rounding(score){

    if(((score % 10) > 5)){
        if((score % 5 > 2)){
            return score + 1
        }
        return score
    }
    if((score % 5) > 3) return score + 1;
    return score;
}

module.exports = rounding;