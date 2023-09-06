using HotelManagement.HotelManagement.Model.Model;
namespace HotelManagement.Model.Model;
public class Hotel
{
	public int HotelId { get; set; }
	public string? Name { get; set; }

	public Location Location { get; set; }
	 public int LocationId { get; set; }

	public float? Rating { get; set; }
}
