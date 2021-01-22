using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;


namespace ProjC.IServices
{
    public interface ITripService
    {
        List<Trips> GetAll();
        Trips GetById(int id);
        bool Add(Trips trip);
        bool Update(Trips trip);
        bool Delete(int id);
    }
}
