using AlbumDomain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumInfrastructure.Data.Mapping
{
    public class AlbumMap : IEntityTypeConfiguration<Album>
    {
        public void Configure(EntityTypeBuilder<Album> builder)
        {
            builder.Property(x => x.AlbumId)
                .HasDefaultValueSql("NEWID()");

            builder.HasMany(x => x.Musicas)
                .WithOne()
                .HasForeignKey(x => x.AlbumId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Property(x => x.Nome)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(x => x.AnoLancamento)
                 .HasColumnType("nvarchar(4)")
                 .IsRequired();
        }
    }
}
