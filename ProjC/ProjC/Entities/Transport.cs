using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ProjC.Entities
{
    public class Transport : BaseEntity
    {
        
        public string TransportName { get; set; }

        public ICollection<Trips> Tript { get; set; }
        
    }
}
