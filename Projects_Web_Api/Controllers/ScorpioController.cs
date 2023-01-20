using Projects_Web_Api.Models;
using Projects_Web_Api.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Projects_Web_Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ScorpioController : ApiController
    {
        public readonly InterfaceOfDis Local;
        public ScorpioController(InterfaceOfDis localvar)
        {
            this.Local = localvar;
        }
        [Route("api/Scorpio/GetOfDisProfile/{PAN}")]
        [HttpGet]
        public IHttpActionResult Get_Of_Drisributer_Profile(string PAN)
        {
            var em = Local.Get_Of_Drisributer_Profile(PAN);
            if (em == null)
            {
                return NotFound();
            }
            return Ok(em);
        }
        [Route("api/Scorpio/GetOfDisProfile/{username}/{password}")]
        [HttpGet]
        public IHttpActionResult Get_of_Drisributer_Login(string username, string password)
        {
            var em = Local.Get_of_Drisributer_Login(username,password);
            return Ok(em);
        }
        [Route("api/Scorpio/GetProduct")]
        [HttpGet]
        public IHttpActionResult GetProduct()
        {
            var em = Local.Get_Of_Products();
            return Ok(em);
        }
        [Route("api/Scorpio/DisGetProduct")]
        [HttpGet]
        public IHttpActionResult DisGetProduct()
        {
            var em = Local.Dis_Products();
            return Ok(em);
        }
        [Route("api/Scorpio/Productstatus")]
        [HttpPost]
        public IHttpActionResult Orderstatus(Model_of_Status models)
        {
            var em = Local.Orderstatus(models);
            return Ok(em);
        }
        [Route("api/Scorpio/DisGetOrderProduct")]
        [HttpGet]
        public IHttpActionResult DisGetOrderroduct()
        {
            var em = Local.Get_Of_OrderProducts();
            return Ok(em);
        }

    }
}

