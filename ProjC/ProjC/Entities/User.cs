using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjC.Entities
{
    public class User : BaseEntity
    {
       
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public Trips Tripu { get; set; }
        


    }
}
