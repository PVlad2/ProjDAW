using ProjC.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjC.Entities;
using ProjC.IServices;

namespace ProjC.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private IConfiguration _config;
        private readonly IUserService _service;
        public TokenController(IConfiguration config, IUserService service)
        {
            _config = config;
            this._service = service;
        }

        [HttpPost]
        public IActionResult GetRandomToken([FromBody] User user)
        {
            var jwt = new JwtService(_config);
            IActionResult response = Unauthorized();
            
            if (string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.Password))
            {
                response = BadRequest();
                return response;
            }

            var dbUser = _service.GetByUserNameAndPassword(user.Username,user.Password);
            if (dbUser != null)
            {
                var token = jwt.GenerateSecurityToken(dbUser.Id);
                return Ok(new { token = token }); ;
            }
            else
            {
                return response;
            }
        }
    }
}