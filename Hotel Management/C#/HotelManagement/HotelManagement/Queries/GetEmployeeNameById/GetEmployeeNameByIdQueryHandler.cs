using HotelManagement.Repo.Context;
using MediatR;

namespace HotelManagement.Queries.GetEmployeeNameById
{
    public class GetEmployeeNameByIdQueryHandler : IRequestHandler<GetEmployeeNameByIdQuery, string>
    {
        private readonly HotelManagementContext _context;

        public GetEmployeeNameByIdQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public Task<string> Handle(GetEmployeeNameByIdQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(string.Empty);
            //return await _context.Employee.Where(x =>  x.Id == request.Id).Select(x => x.Name).FirstOrDefaultAsync();
        }
    }
}
