using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjC.DBData.Model
{
  

        public class Trips
        {
            public int ID { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public int UserID { get; set; }
            public int TransportID { get; set; }
            public DateTime DateStarted { get; set; }
           
            public DateTime DateCompleted { get; set; }

            public virtual ICollection<User> Users { get; set; }
            public virtual Transport Transports { get; set; }
        }
    }


