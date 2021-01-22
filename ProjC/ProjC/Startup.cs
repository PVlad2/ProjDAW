using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;
using ProjC.DBData;
using Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ProjC.Entities;
using ProjC.IServices;
using ProjC.IRepositories;
using ProjC.Repositories;
using ProjC.Services;
using ProjC.Middleware;

namespace ProjC
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            


            services.AddControllersWithViews(); 

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
            services.AddDbContext<TripsContext>(options => options.UseSqlServer("Tripsconnection"));




            services.AddTransient<ITripRepositories, TripsRepositrory>();
            services.AddTransient<IUserRepositories, UserRepositrory>();
            services.AddTransient<ITransportRepositories, TransportRepositrory>();


            services.AddTransient<ITripService, TripService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ITransportService, TransportService>();

            /*  services.AddTransient<ITripService, TripService>();  */
            services.AddTokenAuthentication(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
