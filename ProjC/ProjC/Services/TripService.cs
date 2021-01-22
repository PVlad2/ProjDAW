using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;
using ProjC.IServices;
using ProjC.IRepositories;

namespace ProjC.Services
{
    public class TripService : ITripService
    {
        private readonly ITripRepositories _repository;
        public TripService(ITripRepositories repository)
        {
            this._repository = repository;
        }
        public bool Add(Trips trip)
        {
            _repository.Add(trip);
            return _repository.SaveChanges();
        }

        public bool Delete(int id)
        {
            var trip = _repository.FindById(id);
            _repository.Delete(trip);
            return _repository.SaveChanges();
        }

        public List<Trips> GetAll()
        {
            return _repository.GetAll();
        }

        public Trips GetById(int id)
        {
            return _repository.FindById(id);
        }

        public bool Update( Trips trip)
        {   
            _repository.Update(trip);
            return _repository.SaveChanges();
        }
    }
}

