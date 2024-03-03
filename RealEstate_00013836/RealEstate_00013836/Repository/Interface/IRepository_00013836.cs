namespace RealEstate_00013836.Repository.Interface
{
    // Student ID: 00013836
    public interface IRepository_00013836<T>
    {
        Task<IEnumerable<T>> GetAllAsync();

        Task<T> GetByIdAsync(int id);

        Task CreateAsync(T entity);

        Task UpdateAsync(T entity);

        Task DeleteAsync(int id);
    }
}
