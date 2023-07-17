using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shape
{
    public class Square : Shape
    {
    
        public int length { get; set; }
       
        public Square(int num, int l) : base(num)
        {
            NoOfSides = num;
            length = l;
            
        }
        public override double CalculateArea()
        {
            return (length * length);
        }
    }
}
