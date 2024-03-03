using System.ComponentModel.DataAnnotations;

namespace RealEstate_00013836.Models
{
    // Student ID: 00013836
    public class Location
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "City cannot be empty")]
        public string? City { get; set; }

        [Required(ErrorMessage = "Region cannot be empty")]
        public string? Region { get; set; }

        [Required(ErrorMessage = "Street cannot be empty")]
        public string? Street { get; set; }
    }
}
