// See https://aka.ms/new-console-template for more information

//Print the current date and time in different formats

Console.WriteLine(DateTime.Now.ToString("MM/dd/yyyy"));
Console.WriteLine(DateTime.Now.ToString("dddd, dd MMMM yyyy"));
Console.WriteLine(DateTime.Now.ToString("ddd, dd MMM yyy HH’:’mm’:’ss ‘GMT’"));

//Find the difference between two dates
DateTime dt1 = new DateTime(2020, 4, 11, 4, 0, 12); //11 April 2020 4:00:12
DateTime dt2 = new DateTime(2020, 5, 11, 5, 20, 28); //11 May 2020 5:20:28
DateTime dt3 = new DateTime(2020, 6, 11); //11 June 2020 0:00:00

TimeSpan diff1 = dt2 - dt1; //DateTime - DateTime 
TimeSpan diff2 = dt3 - dt2; //Date - DateTime

Console.WriteLine("{0} - {1} = {2}", dt2, dt1, diff1);
Console.WriteLine("{0} - {1} = {2}", dt3, dt2, diff2);

//Display Day, Month, Year of a given Date
DateTime dt4 = DateTime.Now;
Console.WriteLine( "Day is " + dt4.Day);
Console.WriteLine("Month is " + dt4.Month);
Console.WriteLine("Year is " + dt4.Year);

//To a given Date, add 10 days
Console.WriteLine(dt4.AddDays(10));