using MediatR;

namespace HotelManagement.Commands.AddManager
{
    public class ManagerCommand: IRequest<bool>
    {
        public int UserRoleId { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string HotelName { get; set; } = string.Empty;
        public string LocationName { get; set; } = string.Empty;


    }
}
