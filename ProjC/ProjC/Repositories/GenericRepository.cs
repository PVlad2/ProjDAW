using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.IRepositories;
using ProjC.Entities;
using Microsoft.EntityFrameworkCore;
using ProjC.DBData;
using ProjC.DBData.Model;

namespace ProjC.Repositories
{
    public class GenericRepository<T> : IGenericRepsotiry<T> where T: BaseEntity
    {
        protected readonly TripsContext _context;
        protected readonly DbSet<T> _table;


        public GenericRepository(TripsContext context)
        {
            _context = context;
            _table = context.Set<T>();
        }

        public void Add(T entity)
        {
           
            _context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            entity.IsDeleted = true;
            Update(entity);
        }

        public T FindById(int id)
        {
            return _table.Find(id);
        }

        public List<T> GetAll()
        {
            return _table.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() > 0);
        }

        public void Update(T entity)
        {

            //_table.Update(entity);
            _table.Attach(entity);
            var entry = _context.Entry(entity);
            entry.State = EntityState.Modified;
        }

    }
}
