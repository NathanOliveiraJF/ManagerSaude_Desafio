using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumDomain.Models
{
    public class Musica
    {
        public string MusicaId { get; private set; }
        public string AlbumId { get; private set; }
        public string Nome { get; set; }
        public double Duracao { get; set; }
    }
}
