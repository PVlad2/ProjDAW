using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;


namespace ProjC.IServices
{
    public interface IUserService
    {
        User GetById(int id);
        User GetByUserNameAndPassword(string username,string password);
    }
}
