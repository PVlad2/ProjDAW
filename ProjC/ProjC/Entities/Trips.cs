using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjC.Entities
{
    public class Trips : BaseEntity
    {

       
        public string Name { get; set; }
        public string Description { get; set; }
        public int UserID { get; set; }
        public int TransportID { get; set; }
        public DateTime DateStarted { get; set; }

        public DateTime DateCompleted { get; set; }

        public ICollection<User> Users { get; set; }
        public Transport Transports { get; set; }

    }
}
