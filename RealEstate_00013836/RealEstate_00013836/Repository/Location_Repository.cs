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
            try
            {
                await _DbContext.Locations.AddAsync(entity);
                await _DbContext.SaveChangesAsync();
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }
        }

        // Delete
        public async Task DeleteAsync(int id)
        {
            var location = await _DbContext.Locations.FindAsync(id);
            if (location != null)
            {
                try
                {
                    _DbContext.Locations.Remove(location);
                    await _DbContext.SaveChangesAsync();
                }
                catch (Exception err)
                {
                    await Console.Out.WriteLineAsync(err.ToString());
                }
            }
            else
            {
                await Console.Out.WriteLineAsync("Nothing to delete");
            }
        }

        // Get All
        public async Task<IEnumerable<Location>> GetAllAsync()
        {
            try
            {
                var locations = await _DbContext.Locations.ToArrayAsync();
                if (locations != null) return locations;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return null;
        }

        // Get By Id
        public async Task<Location> GetByIdAsync(int id)
        {
            try
            {
                var location = await _DbContext.Locations.FirstOrDefaultAsync(location => location.Id == id);
                if (location != null) return location;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return null;
        }

        // Update
        public async Task UpdateAsync(Location entity)
        {
            try
            {
                _DbContext.Entry(entity).State = EntityState.Modified;
                await _DbContext.SaveChangesAsync();
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }
        }
    }
}
