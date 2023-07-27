using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace GenericTest
{
    internal class GenericClass<T> where T : System.IComparable<T>
    {
        public T Compare(T val1, T val2)
        {
            int ans = val1.CompareTo(val2);
            if (ans > 0) return val1;
            else return val2;

        }
    }
    }
}
