using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjC.DBData.Model
{
    public class Transport
    {
        public int ID { get; set; }
        public string TransportName { get; set; }

        public virtual Trips Tript { get; set; }
        
    }
}
