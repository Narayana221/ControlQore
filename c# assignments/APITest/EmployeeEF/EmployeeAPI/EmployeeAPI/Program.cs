using EmployeeApplication.Repository.Context;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<EmployeeApplicationContext>(option =>
            {
                option.UseSqlServer(builder.Configuration["ConnectionString:SqlServer"]);
            });

            
              builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAngularOrigins",
                builder =>
                {
                    builder.WithOrigins("http://localhost",
                                        "https://localhost:4200",
                                        "https://localhost:7178",
                                        "http://localhost:65268",
                                        "http://localhost:4200"
                                        )
                                        .AllowAnyHeader()
                                        .AllowAnyMethod()
                                        .SetIsOriginAllowedToAllowWildcardSubdomains();
                });
            });

            var app = builder.Build();
            app.UseCors("AllowAngularOrigins");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}