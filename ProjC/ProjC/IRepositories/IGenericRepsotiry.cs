using ProjC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ProjC.IRepositories
{
    public interface IGenericRepsotiry<T> where T : BaseEntity
    {
            
        List<T> GetAll();
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);

        T FindById(int id);

        bool SaveChanges();


    }
}
