const rounding = score => {

    if(score < 38) return score;
    const roundedScore = roundUp(score);

    return (roundedScore - score) < 3 ? roundedScore : score;
}

const roundUp = score => {
    return Math.ceil(score / 5) * 5;
}

module.exports = rounding;