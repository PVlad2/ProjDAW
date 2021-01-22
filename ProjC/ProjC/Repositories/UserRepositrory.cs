using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.IRepositories;
 using ProjC.Entities;
using ProjC.DBData;


namespace ProjC.Repositories
{
    public class UserRepositrory : GenericRepository<User>, IUserRepositories
    {
        public UserRepositrory(TripsContext context) : base(context) { }



    }
}
