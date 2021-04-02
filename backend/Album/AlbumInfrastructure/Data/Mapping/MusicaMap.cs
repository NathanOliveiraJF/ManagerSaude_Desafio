using AlbumDomain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumInfrastructure.Data.Mapping
{
    public class MusicaMap : IEntityTypeConfiguration<Musica>
    {
        public void Configure(EntityTypeBuilder<Musica> builder)
        {
            builder.Property(x => x.MusicaId)
                .HasDefaultValueSql("NEWID()");

            builder.Property(x => x.AlbumId)
                .IsRequired();

            builder.Property(x => x.Duracao)
                .IsRequired();

            builder.Property(x => x.Nome)
                .HasColumnType("nvarchar(50)")
                .IsRequired();
        }
    }
}
