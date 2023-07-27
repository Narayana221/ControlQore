using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Custom
{
    internal class InvalidUserInputException:Exception
    {
        public override string Message
        {
            get
            {
                return "User Input is Invalid";
            }
        }
    }
}
