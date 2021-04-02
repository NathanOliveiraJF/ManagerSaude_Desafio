using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumDomain.Models
{
    public class Musica
    {
        public Musica(string musicaId, string albumId, string nome, double duracao)
        {
            MusicaId = musicaId;
            AlbumId = albumId;
            Nome = nome;
            Duracao = duracao;
        }
        public Musica()
        {

        }

        public string MusicaId { get;  set; }
        public string AlbumId { get;  set; }
        public string Nome { get; set; }
        public double Duracao { get; set; }
    }
}
