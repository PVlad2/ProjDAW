using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjC.Entities;
using ProjC.IServices;
using ProjC.IRepositories;

namespace ProjC.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepositories _repository;
        public UserService(IUserRepositories repository)
        {
            this._repository = repository;
        }
        public User GetById(int id)
        {
            return _repository.FindById(id);
        }
        public User GetByUserNameAndPassword(string username,string password)
        {
            User usr = _repository.GetAll().Where(x => x.Username.ToLower().Equals(username) && x.Password.Equals(password)).FirstOrDefault();
            return usr;
        }
    }
}

