using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository.Interface;
using System.Collections;

namespace RealEstate_00013836.Controllers
{
    // Student ID: 00013836
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        // Constructor
        private readonly IRepository_00013836<Location> _repository;

        public LocationController(IRepository_00013836<Location> repository)
        {
            _repository = repository;
        }

        // Actions
        // Get All
        [HttpGet]
        public async Task<IEnumerable> GetAll()
        {
            try
            {
                var locationslist = await _repository.GetAllAsync();
                if (locationslist != null) return locationslist;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return (IEnumerable)BadRequest("Dataset is empty");
        }

        // Get By Id
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Location), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var locationBy_Id = await _repository.GetByIdAsync(id);
                return locationBy_Id == null ? NotFound() : Ok(locationBy_Id);
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return NotFound();
        }

        // Create
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Location location)
        {
            try
            {
                await _repository.CreateAsync(location);
                return CreatedAtAction(nameof(GetById), new { id = location.Id }, location);
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }
            return NotFound();
        }

        // Update
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Location location)
        {
            try
            {
                if (location != null)
                {
                    await _repository.UpdateAsync(location);
                    return NoContent();
                }
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return BadRequest("Data is null");

        }

        // Delete
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _repository.DeleteAsync(id);
                return NoContent();
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }
            return BadRequest();
        }
    }
}
