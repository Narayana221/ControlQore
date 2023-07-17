using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shape
{
    public abstract class Shape
    {
       public int NoOfSides;
        public Shape(int num)
        {
            NoOfSides = num ;
        }

        public abstract double CalculateArea();

        public void Display()
        {
            Console.WriteLine($"Number of sides - {NoOfSides}");
        }
    }
}
