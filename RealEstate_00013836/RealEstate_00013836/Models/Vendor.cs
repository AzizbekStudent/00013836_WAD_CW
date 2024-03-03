using System.ComponentModel.DataAnnotations;

namespace RealEstate_00013836.Models
{
    // Student ID: 00013836
    public class Vendor
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "FName cannot be empty")]
        public string? FName { get; set; }

        [Required(ErrorMessage = "LName cannot be empty")]
        public string? LName { get; set; }

        [Required(ErrorMessage = "Age cannot be empty")]
        public int? Age { get; set; }

        [Required(ErrorMessage = "BirthDate cannot be empty")]
        public DateTime? BirthDate { get; set; }
    }
}
