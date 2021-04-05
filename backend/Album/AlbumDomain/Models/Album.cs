using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumDomain.Models
{
    public class Album
    {
        public Album(string albumId, string nome, int anoLancamento)
        {
            AlbumId = albumId;
            Nome = nome;
            AnoLancamento = anoLancamento;
        }

        public Album()
        {

        }

        public string AlbumId { get;  set; }
        public string Nome { get; set; }
        public int AnoLancamento { get; set; }
        public IList<Musica> Musicas { get; set; } = new List<Musica>();
    }
}
