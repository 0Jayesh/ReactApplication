using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("pet")]
    [ApiController]
    public class MainController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public MainController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Pet>> GetPet()
        {
            return Ok(_db.Pets.ToList());
        }

        [HttpGet("olderThan/{age:int}", Name = "GetPetsOlderThanFive")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Pet>> GetPetsOlderThanFive(int age)
        {
            var pets = _db.Pets.FromSqlInterpolated($"SELECT * FROM Pets WHERE Age > {age}").ToList();
            return Ok(pets);
        }


        [HttpGet("{id:int}", Name = "GetPet")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Pet> GetPet(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var pet = _db.Pets.FirstOrDefault(x => x.Id == id);
            if (pet == null)
            {
                return NotFound();
            }

            return Ok(pet);
        }

        [HttpPost("addPet", Name = "AddPet")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Pet> AddPet([FromBody] Pet pet)

        {
            if (_db.Pets.FirstOrDefault(x => x.Name == pet.Name) != null)
            {
                ModelState.AddModelError("CustomError", "Pet already added!");
                return BadRequest(ModelState);
            }

            if (pet == null)
            {
                return BadRequest(pet);
            }

            if (pet.Id > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            Pet model = new Pet()
            {
                Id = pet.Id,
                Age = pet.Age,
                Breed = pet.Breed,
                Name = pet.Name,
                Weight = pet.Weight,
                Height = pet.Height
            };

            _db.Pets.Add(model);
            _db.SaveChanges();

            return CreatedAtRoute("GetPet", new { id = pet.Id }, pet);
        }

        [HttpDelete("deletePet/{id:int}", Name = "DeletePet")]
        public IActionResult DeleteDog(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var pet = _db.Pets.FirstOrDefault(u => u.Id == id);
            if (pet == null)
            {
                return NotFound();
            }
            _db.Pets.Remove(pet);
            _db.SaveChanges();
            return NoContent();
        }

    }
}
