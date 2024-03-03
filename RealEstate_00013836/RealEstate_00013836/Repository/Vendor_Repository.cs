using Microsoft.EntityFrameworkCore;
using RealEstate_00013836.Data;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository.Interface;

namespace RealEstate_00013836.Repository
{
    // Student ID: 00013836
    public class Vendor_Repository : IRepository_00013836<Vendor>
    {
        private readonly RealEstate_00013836_DbContext _DbContext;

        // Constructor
        public Vendor_Repository(RealEstate_00013836_DbContext dbContext)
        {
            _DbContext = dbContext;
        }

        // Main Functions
        // Create
        public async Task CreateAsync(Vendor entity)
        {
            await _DbContext.Vendors.AddAsync(entity);
            await _DbContext.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteAsync(int id)
        {
            var vendor = await _DbContext.Vendors.FindAsync(id);

            if(vendor != null)
            {
                 _DbContext.Vendors.Remove(vendor);
                await _DbContext.SaveChangesAsync();
            }
        }

        // Get All
        public async Task<IEnumerable<Vendor>> GetAllAsync()
        {
            return await _DbContext.Vendors.ToArrayAsync();
        }

        // Get By Id
        public async Task<Vendor> GetByIdAsync(int id)
        {
            return await _DbContext.Vendors.FirstOrDefaultAsync(vendor => vendor.Id == id);
        }

        // Update
        public async Task UpdateAsync(Vendor entity)
        {
            _DbContext.Entry(entity).State = EntityState.Modified;
            await _DbContext.SaveChangesAsync();
        }

    }
}
