using Microsoft.EntityFrameworkCore;
using RealEstate_00013836.Data;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository.Interface;

namespace RealEstate_00013836.Repository
{
    // Student ID: 00013836
    public class Location_Repository : IRepository_00013836<Location>
    {
        private readonly RealEstate_00013836_DbContext _DbContext;

        // Constructor
        public Location_Repository(RealEstate_00013836_DbContext dbContext)
        {
            _DbContext = dbContext;
        }


        // Main Functions
        // Create
        public async Task CreateAsync(Location entity)
        {
            await _DbContext.Locations.AddAsync(entity);
            await _DbContext.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteAsync(int id)
        {
            var location = await _DbContext.Locations.FindAsync(id);
            if(location != null)
            {
                 _DbContext.Locations.Remove(location);
                await _DbContext.SaveChangesAsync();
            }
        }

        // Get All
        public async Task<IEnumerable<Location>> GetAllAsync()
        {
            return await _DbContext.Locations.ToArrayAsync();
        }

        // Get By Id
        public async Task<Location> GetByIdAsync(int id)
        {
            return await _DbContext.Locations.FirstOrDefaultAsync(location => location.Id == id);
        }

        // Update
        public async Task UpdateAsync(Location entity)
        {
            _DbContext.Entry(entity).State = EntityState.Modified;
            await _DbContext.SaveChangesAsync();
        }


    }
}
