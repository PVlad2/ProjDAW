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
    public class UsersController : Controller
    {


        private readonly IUserService _service;
        public UsersController(IUserService service)
        {
            this._service = service;
        }

        [Authorize]
        [HttpGet("GetUser")]
        public IActionResult GetUser()
        {
            try
            {
                var claimsIdentity = this.User.Identity as ClaimsIdentity;
                var userId = claimsIdentity.FindFirst(ClaimTypes.UserData)?.Value;
                var dbUser = _service.GetById(int.Parse(userId));
                if (dbUser != null)
                {
                    return Ok(dbUser);
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception)
            {

                return Unauthorized();
            }
        }
    }
}
