using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumDomain.Models
{
    public class Album
    {
        public Album(string albumId, string nome, DateTime anoLancamento)
        {
            AlbumId = albumId;
            Nome = nome;
            AnoLancamento = anoLancamento;
        }

        public string AlbumId { get;  set; }
        public string Nome { get; set; }
        public DateTime AnoLancamento { get; set; }
        public IList<Musica> Musicas { get; set; } = new List<Musica>();
    }
}
