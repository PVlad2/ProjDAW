using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;


namespace ProjC.IServices
{
    public interface ITransportService
    {
        List<Transport> GetAll();
        Transport GetById(int id);
        bool Add(Transport trip);//TransportName
        bool Update(Transport trip);
        bool Delete(int id);
    }
}
