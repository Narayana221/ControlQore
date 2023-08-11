
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1.Repo
{
    
    public class studentManagement
    {
        public studentManagement() { }
        public List<Student> GetStudentDetail()
        { 

            string connectionString = "server=localhost, 1401;database=student;user id=sa;password=Pass@word;" +
               "TrustServerCertificate=true";
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "GetStudentDetails";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            SqlDataReader reader = cmd.ExecuteReader();
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            List<Student>? studentList = new List<Student>();
           
            while (reader.Read())
            {
                //for (int i = 0; i < reader.FieldCount; i++)
                {
                    Student ob = new Student();
                    ob.Id = (int)reader["Id"];
                    ob.Name = (string)reader["Name"];
                    ob.Address = reader["Address"].ToString();
                    ob.Class1 = (int)reader["Class"];
                    ob.Mark = (float)(double)reader["Mark"];

                    studentList.Add(ob);
                 
                }
                Console.WriteLine("-------------------------");

            }


            return studentList;
            
            
            
            
            
            
            
            
            //int count = (int)cmd.ExecuteScalar();
            //return count;

            // con.Close();



        }
        
    }
    
}
