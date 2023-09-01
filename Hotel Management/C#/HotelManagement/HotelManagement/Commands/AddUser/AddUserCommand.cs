using MediatR;

namespace HotelManagement.Commands.AddStudent
{
    public class AddUserCommand : IRequest<bool>
    {
        public int UserRoleId { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
