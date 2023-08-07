using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseTest
{
    public class AddStudent
    {
        public AddStudent() { }

        public int AddStudentDetails(string name, string address, int class1, float mark)
        {
            string connectionString = "server=localhost, 1401;database=student;user id=sa;password=Pass@word;" +
                "TrustServerCertificate=true";

            SqlConnection con = new SqlConnection(connectionString);
            con.Open();


            string query = "insert into Studentdetail values(@name,@address,@class,@mark)";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;

            SqlParameter paramName = new SqlParameter();
            paramName.ParameterName = "name";
            paramName.Value = name;
            paramName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramName.Size = 20;

            SqlParameter paramAddress = new SqlParameter();
            paramAddress.ParameterName = "Address";
            paramAddress.Value = address;
            paramAddress.SqlDbType = System.Data.SqlDbType.VarChar;
            paramAddress.Size = 30;

            SqlParameter paramClass = new SqlParameter();
            paramClass.ParameterName = "Class";
            paramClass.Value = class1;
            paramClass.SqlDbType = System.Data.SqlDbType.Int;


            SqlParameter paramMark = new SqlParameter();
            paramMark.ParameterName = "Mark";
            paramMark.Value = mark;
            paramMark.SqlDbType = System.Data.SqlDbType.Float;


            cmd.Parameters.Add(paramName);
            cmd.Parameters.Add(paramMark);
            cmd.Parameters.Add(paramClass);
            cmd.Parameters.Add(paramAddress);

            int noOfRowsAffected = cmd.ExecuteNonQuery();
            return noOfRowsAffected;

        }

        public int UsingProc(string name, string address, int class1, float mark)
        {
            string connectionString = "server=localhost, 1401;database=student;user id=sa;password=Pass@word;" +
               "TrustServerCertificate=true";

            SqlConnection con = new SqlConnection(connectionString);
            con.Open();


            string query = "AddStudentsUsingProc"; 
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter paramName = new SqlParameter();
            paramName.ParameterName = "name";
            paramName.Value = name;
            paramName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramName.Size = 20;

            SqlParameter paramAddress = new SqlParameter();
            paramAddress.ParameterName = "Address";
            paramAddress.Value = address;
            paramAddress.SqlDbType = System.Data.SqlDbType.VarChar;
            paramAddress.Size = 30;

            SqlParameter paramClass = new SqlParameter();
            paramClass.ParameterName = "Class";
            paramClass.Value = class1;
            paramClass.SqlDbType = System.Data.SqlDbType.Int;


            SqlParameter paramMark = new SqlParameter();
            paramMark.ParameterName = "Mark";
            paramMark.Value = mark;
            paramMark.SqlDbType = System.Data.SqlDbType.Float;

            SqlParameter paramReturn = new SqlParameter();
            paramReturn.SqlDbType = System.Data.SqlDbType.Int;
            paramReturn.Direction = System.Data.ParameterDirection.ReturnValue;




            cmd.Parameters.Add(paramName);
            cmd.Parameters.Add(paramMark);
            cmd.Parameters.Add(paramClass);
            cmd.Parameters.Add(paramAddress);
            cmd.Parameters.Add(paramReturn);


            cmd.ExecuteNonQuery();
            int ret = (int)paramReturn.Value;
            return ret;
        }

        public int GetStudentDetail()
        {

            string connectionString = "server=localhost, 1401;database=student;user id=sa;password=Pass@word;" +
               "TrustServerCertificate=true";
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "GetStudentDetails";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            //SqlDataReader reader = cmd.ExecuteReader();
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //while (reader.Read())
            //{
            //    for (int i = 0; i < reader.FieldCount; i++)
            //    {
            //        Console.WriteLine(reader[i]);
            //    }
            //    Console.WriteLine("-------------------------");

            //}
            int count = (int)cmd.ExecuteScalar();
            return count;

           // con.Close();


        }
    }
}
