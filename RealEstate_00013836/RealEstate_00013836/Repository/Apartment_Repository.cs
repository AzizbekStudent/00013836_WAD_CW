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
            try
            {
                await _DbContext.Apartments.AddAsync(entity);
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
            var property = await _DbContext.Apartments.FindAsync(id);
            if (property != null)
            {
                try
                {
                    _DbContext.Apartments.Remove(property);
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

        // GetAll
        public async Task<IEnumerable<Apartment>> GetAllAsync()
        {
            try
            {
                var ApartmentsList = await _DbContext.Apartments
                        .Include(l => l.Location_)
                        .Include(v => v.Vendor_)
                        .ToArrayAsync();
                if (ApartmentsList != null) return ApartmentsList;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return null;
        }

        // Get By Id
        public async Task<Apartment> GetByIdAsync(int id)
        {
            try
            {
                var apartment = await _DbContext.Apartments
                       .Include(l => l.Location_)
                       .Include(v => v.Vendor_)
                       .FirstOrDefaultAsync(apartment => apartment.Id == id);
                if (apartment != null) return apartment;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return null;
        }

        // Update
        public async Task UpdateAsync(Apartment entity)
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
