namespace HotelManagement.HotelManagement.Model.Model
{
    public class User
    {
        public int User_Id { get; set; }
        public UserRole UserRole { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
