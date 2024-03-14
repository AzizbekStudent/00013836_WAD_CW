using Microsoft.EntityFrameworkCore;
using RealEstate_00013836.Data;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository;
using RealEstate_00013836.Repository.Interface;

var builder = WebApplication.CreateBuilder(args);

string _connStr = "RealEstate_00013836";
// Student ID: 00013836
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

try
{
	builder.Services.AddDbContext<RealEstate_00013836_DbContext>(options =>
   options.UseSqlServer(builder.Configuration.GetConnectionString(_connStr)));

}
catch (Exception err)
{
    Console.WriteLine($"Error configuring DbContext: {err.Message}");
}

// ===========================================================
// Initializing Repositories
// ===========================================================

builder.Services.AddScoped<IRepository_00013836<Apartment>, Apartment_Repository>();
builder.Services.AddScoped<IRepository_00013836<Location>, Location_Repository>();
builder.Services.AddScoped<IRepository_00013836<Vendor>, Vendor_Repository>();

// ===========================================================

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
