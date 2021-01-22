using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.IServices;
using ProjC.Entities;
using Microsoft.AspNetCore.Authorization;

namespace ProjC.Controllers
{
    [ Route("api/[controller]")]
    public class TransportController : Controller
    {


        private readonly ITransportService _service;
        public TransportController(ITransportService service)
        {
            this._service = service;
        }

        [Authorize]
        [HttpGet("GetTransports")]
        public IActionResult GetTransports()
        {
            var allTransports = _service.GetAll();
            return Ok(allTransports.Where(x=>x.IsDeleted == false));
        }

        [Authorize]
        [HttpGet("SingleTransport/{id}")]
        public IActionResult GetTransportById(int id)
        {
            var transport = _service.GetById(id);
            return Ok(transport);
        }

        [Authorize]
        [HttpPost("AddTransport")]
        public IActionResult AddTransport([FromBody] Transport trp)
        {
            if (trp != null)
            {
                _service.Add(trp);
            }
            return Ok();
        }

        [Authorize]
        [HttpPatch("UpdateTransport/{id}")]
        public IActionResult UpdateTransport([FromBody] Transport trp)
        {
           
            _service.Update(trp);
            return Ok(trp);
        }

        [Authorize]
        [HttpDelete("DeleteTransport/{id}")]
        public IActionResult DeleteTransport(int id)
        {
            _service.Delete(id);
            return Ok();

        }
    }
}
