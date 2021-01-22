using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.IRepositories;
 using ProjC.Entities;
using ProjC.DBData;


namespace ProjC.Repositories
{
    public class TransportRepositrory : GenericRepository<Transport>, ITransportRepositories
    {
        public TransportRepositrory(TripsContext context) : base(context) { }



    }
}
