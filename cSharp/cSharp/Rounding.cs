using System;

namespace cSharp
{
    public class Rounding
    {
        public int Grade(int score)
        {
            if (score < 38) return score;

            decimal convertedScore = new decimal(score);
            var ceiling = Math.Ceiling(convertedScore / 5) * 5;

            var answer = ceiling - convertedScore < 3 ? ceiling : convertedScore;

            return Decimal.ToInt32(answer);
        }
    }
}
