using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RealEstate_00013836.Models
{
    // Student ID: 00013836
    public class Apartment
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "HouseTitle cannot be empty")]
        public string? HouseTitle { get; set; }

        [Required(ErrorMessage = "Description cannot be empty")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Area cannot be empty")]
        public double? Area { get; set; }

        [Required(ErrorMessage = "Price cannot be empty")]
        public double? Price { get; set; }

        [Required(ErrorMessage = "CompletionDate cannot be empty")]
        public DateTime? CompletionDate { get; set; }

        [Required(ErrorMessage = "IsForRent cannot be empty")]
        public bool? IsForRent { get; set; } = false;

        [Required(ErrorMessage = "IsAvailable cannot be empty")]
        public bool? IsAvailable { get; set; } = true;

        // Foreign key for address entity
        public int? Location_Id { get; set; }

        [ForeignKey("Location_Id")]
        public Location? Location_ { get; set; }

        // Foreign key for category entity
        public int? Vendor_Id { get; set; }

        [ForeignKey("Vendor_Id")]
        public Vendor? Vendor_ { get; set; }
    }
}
