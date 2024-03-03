using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using RealEstate_00013836.Models;
using RealEstate_00013836.Repository.Interface;
using System.Collections;

namespace RealEstate_00013836.Controllers
{
    // Student ID: 00013836
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ApartmentController : ControllerBase
    {
        // Constructor
        private readonly IRepository_00013836<Apartment> _repository;

        public ApartmentController(IRepository_00013836<Apartment> repository)
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
                var apartmentList = await _repository.GetAllAsync();
                if (apartmentList != null) return apartmentList;
            }
            catch (Exception err)
            {
                await Console.Out.WriteLineAsync(err.ToString());
            }

            return (IEnumerable)BadRequest("Dataset is empty"); ;
        }

        // Get By Id
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Apartment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var apartmentBy_Id = await _repository.GetByIdAsync(id);
                return apartmentBy_Id == null ? NotFound() : Ok(apartmentBy_Id);
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
        public async Task<IActionResult> Create(Apartment apartment)
        {
            try
            {
                await _repository.CreateAsync(apartment);
                return CreatedAtAction(nameof(GetById), new { id = apartment.Id }, apartment);
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
        public async Task<IActionResult> Update(Apartment apartment)
        {
            try
            {
                if(apartment != null)
                {
                    await _repository.UpdateAsync(apartment);
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
