namespace HotelManagement.HotelManagement.Model.Model
{
    public class User
    {
        public int UserId { get; set; }
        public int UserRoleId { get; set; }
        //public virtual UserRole UserRole { get; set; }

        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
