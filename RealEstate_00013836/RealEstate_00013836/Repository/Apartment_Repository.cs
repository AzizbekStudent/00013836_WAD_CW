using Microsoft.EntityFrameworkCore;
using RealEstate_00013836.Data;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository.Interface;

namespace RealEstate_00013836.Repository
{
    // Student ID: 00013836
    public class Apartment_Repository : IRepository_00013836<Apartment>
    {
        private readonly RealEstate_00013836_DbContext _DbContext;

        // Constructor
        public Apartment_Repository(RealEstate_00013836_DbContext dbContext)
        {
                _DbContext = dbContext;
        }

        // Main functions
        // Create
        public async Task CreateAsync(Apartment entity)
        {
            await _DbContext.Apartments.AddAsync(entity);
            await _DbContext.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteAsync(int id)
        {
            var property = await _DbContext.Apartments.FindAsync(id);
            if (property != null)
            {
                _DbContext.Apartments.Remove(property);
                await _DbContext.SaveChangesAsync();
            }
        }

        // GetAll
        public async Task<IEnumerable<Apartment>> GetAllAsync()
        {
            return await _DbContext.Apartments.ToArrayAsync();
        }

        // Get By Id
        public async Task<Apartment> GetByIdAsync(int id)
        {
            return await _DbContext.Apartments.FirstOrDefaultAsync(apartment => apartment.Id ==id);
        }

        // Update
        public async Task UpdateAsync(Apartment entity)
        {
             _DbContext.Entry(entity).State = EntityState.Modified;
            await _DbContext.SaveChangesAsync();
        }
    }
}
