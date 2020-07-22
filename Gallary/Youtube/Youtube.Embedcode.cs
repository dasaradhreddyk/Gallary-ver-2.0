using System.Linq;
using System.Text.RegularExpressions;
 
namespace Gallary.Youtube
{
    internal static class Youtube
    {
        private const string YoutubeLinkRegex = "(?:.+?)?(?:\\/v\\/|watch\\/|\\?v=|\\&v=|youtu\\.be\\/|\\/v=|^youtu\\.be\\/)([a-zA-Z0-9_-]{11})+";

        internal static string GetVideoId(string input)
        {
            var regex = new Regex(YoutubeLinkRegex, RegexOptions.Compiled);
            foreach (Match match in regex.Matches(input))
            {
                //Console.WriteLine(match);
                foreach (var groupdata in match.Groups.Cast<Group>().Where(groupdata => !groupdata.ToString().StartsWith("http://") && !groupdata.ToString().StartsWith("https://") && !groupdata.ToString().StartsWith("youtu") && !groupdata.ToString().StartsWith("www.")))
                {
                    return groupdata.ToString();
                }
            }
            return string.Empty;
        }
    }
}

//test videos urls

//var urlList = new List<String>
//{
//    "http://youtu.be/AAAAAAAAA01",
//    "http://www.youtube.com/embed/watch?feature=player_embedded&v=AAAAAAAAA02",
//    "http://www.youtube.com/embed/watch?v=AAAAAAAAA03",
//    "http://www.youtube.com/embed/v=AAAAAAAAA04",
//    "http://www.youtube.com/watch?feature=player_embedded&v=AAAAAAAAA05",
//    "http://www.youtube.com/watch?v=AAAAAAAAA06",
//    "www.youtube.com/watch?v=AAAAAAAAA07",
//    "www.youtu.be/AAAAAAAAA08",
//    "youtu.be/AAAAAAAAA09",
//    "youtube.com/watch?v=AAAAAAAAA10",
//    "http://www.youtube.com/watch/AAAAAAAAA11",
//    "http://www.youtube.com/v/AAAAAAAAA12",
//    "http://www.youtube.com/v/AAAAAAAAA13",
//    "http://www.youtube.com/watch?v=i-AAAAAAA14&feature=related",
//    "http://www.youtube.com/attribution_link?u=/watch?v=AAAAAAAAA15&feature=share&a=9QlmP1yvjcllp0h3l0NwuA",
//    "http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&u=/watch?v=AAAAAAAAA16&feature=em-uploademail",
//    "http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&feature=em-uploademail&u=/watch?v=AAAAAAAAA17",
//    "http://www.youtube.com/v/A-AAAAAAA18?fs=1&rel=0"
//};
 
//foreach (var entry in urlList)
//{
//    Console.WriteLine(Youtube.GetVideoId(entry));
//}