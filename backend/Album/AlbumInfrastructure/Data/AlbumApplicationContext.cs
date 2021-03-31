using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlbumDomain.Models;

namespace AlbumApplication.Data
{
    public class AlbumApplicationContext : DbContext
    {
        public AlbumApplicationContext (DbContextOptions<AlbumApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Album> Album { get; set; }
        public DbSet<Album> Musica { get; set; }

    }
}
