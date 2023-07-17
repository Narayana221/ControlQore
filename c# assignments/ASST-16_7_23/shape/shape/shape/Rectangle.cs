using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shape
{
    public class Rectangle : Shape
    {
        public int length { get; set; }
        public int breadth { get; set; }
        public Rectangle(int num, int l, int b) : base(num)
        {
            NoOfSides = num;
            length = l;
            breadth = b;
        }
        public override double CalculateArea()
        {
            return (length * breadth) ;
        }
    }
}
