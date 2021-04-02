using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlbumDomain.Models;
using AlbumInfrastructure.Data.Mapping;

namespace AlbumInfrastructure.Data.Context
{
    public class AlbumApplicationContext : DbContext
    {
        public AlbumApplicationContext (DbContextOptions<AlbumApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Album> Album { get; set; }
        public DbSet<Musica> Musica { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AlbumMap());
            modelBuilder.ApplyConfiguration(new MusicaMap());
        }
    }
}
