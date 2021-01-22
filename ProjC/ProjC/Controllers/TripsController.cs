using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.IServices;
using ProjC.Entities;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ProjC.Controllers
{
    [ Route("api/[controller]")]
    public class TripsController : Controller
    {


        private readonly ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }




        [Authorize]
        [HttpGet("GetTrips")]
        public IActionResult GetTrips()
        {
            var allTrips = _service.GetAll();
            return Ok(allTrips.Where(x=>x.IsDeleted == false));
        }

        [Authorize]
        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _service.GetById(id);
            return Ok(trip);
        }

        [Authorize]
        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trips trip)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.UserData)?.Value;
            if (trip != null)
            {
                trip.UserID = int.Parse(userId);
                _service.Add(trip);
            }
            return Ok();
        }

        [Authorize]
        [HttpPatch("UpdateTrip/{id}")]
        public IActionResult UpdateTrip([FromBody] Trips trip)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.UserData)?.Value;
            if (trip != null)
            {
                trip.UserID = int.Parse(userId);
                _service.Update(trip);
            }
            return Ok(trip);
        }

        [Authorize]
        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _service.Delete(id);
            return Ok();

        }
    }
}
