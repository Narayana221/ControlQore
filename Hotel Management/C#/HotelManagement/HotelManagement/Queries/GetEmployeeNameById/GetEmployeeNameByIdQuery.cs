using MediatR;

namespace HotelManagement.Queries.GetEmployeeNameById
{
    public class GetEmployeeNameByIdQuery : IRequest<string>
    {
        public int Id { get; set; }
    }
}
