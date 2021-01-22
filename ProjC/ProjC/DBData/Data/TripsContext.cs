using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjC;
using ProjC.Entities;

namespace ProjC.DBData
{
    public class TripsContext : DbContext
    {
        public TripsContext(DbContextOptions options) : base(options)
        { }

        public virtual DbSet<Trips> Trips { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Transport> Transports { get; set; }

       protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
       {
           optionBuilder
              .UseSqlServer(@"Data Source = (localdb)\MSSQLLocalDB; Initial Catalog = Trips;");
      }    
       

       

    }
}
