using NUnit.Framework;

namespace cSharp.Tests
{

    public class Tests
    {

        [TestCase(84, 85)]
        [TestCase(73, 75)]
        [TestCase(38, 40)]
        public void RoundingUp_ScoreWithinTwoOfNextFive_ReturnTrue(int score, int expected)
        {
            Rounding rounding = new Rounding();
            bool result = rounding.Grade(score) == expected;
            Assert.True(result);
        }

        [TestCase(29)]
        [TestCase(33)]
        public void NoRounding_ScoreLessThan38__ReturnTrue(int score)
        {
            Rounding rounding = new Rounding();
            bool result = rounding.Grade(score) == score;
            Assert.True(result);
        }

        [TestCase(57)]
        [TestCase(67)]
        public void NoRounding_ScoreMoreThanTwoAwayFromNextFive_ReturnTrue(int score)
        {
            Rounding rounding = new Rounding();
            bool result = rounding.Grade(score) == score;
            Assert.True(result);
        }

    }
}