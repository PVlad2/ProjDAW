using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;
using ProjC.IServices;
using ProjC.IRepositories;

namespace ProjC.Services
{
    public class TransportService : ITransportService
    {
        private readonly ITransportRepositories _repository;
        public TransportService(ITransportRepositories repository)
        {
            this._repository = repository;
        }
        public bool Add(Transport trp)
        {
            _repository.Add(trp);
            return _repository.SaveChanges();
        }

        public bool Delete(int id)
        {
            var trip = _repository.FindById(id);
            _repository.Delete(trip);
            return _repository.SaveChanges();
        }

        public List<Transport> GetAll()
        {
            return _repository.GetAll();
        }

        public Transport GetById(int id)
        {
            return _repository.FindById(id);
        }

        public bool Update(Transport trp)
        {   
            _repository.Update(trp);
            return _repository.SaveChanges();
        }
    }
}

