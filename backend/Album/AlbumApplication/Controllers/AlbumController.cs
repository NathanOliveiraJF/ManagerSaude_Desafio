using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbumInfrastructure.Data.Context;
using AlbumDomain.Models;

namespace AlbumApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private readonly AlbumApplicationContext _context;

        public AlbumController(AlbumApplicationContext context)
        {
            _context = context;
        }

        // GET: api/Album
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Album>>> GetAlbum()
        {
            return await _context.Album.ToListAsync();
        }

        // GET: api/Album/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbum(string id)
        {
            var album = await _context.Album.FindAsync(id);

            if (album == null)
            {
                return NotFound();
            }

            await _context.Entry(album)
                .Collection(x => x.Musicas)
                .LoadAsync();
               

            return album;
        }

        // PUT: api/Album/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum(string id, Album album)
        {
            if (id != album.AlbumId)
            {
                return BadRequest();
            }

            //_context.Entry(album).State = EntityState.Modified;
            _context.Update(album);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // PUT: api/album/musica/1
        [HttpPut("/Musica/{musicaId}")]
        public async Task<IActionResult> PutMusica( string musicaId, Musica musica)
        {
            if (musicaId != musica.MusicaId)
            {
                return BadRequest();
            }

            var _musica = _context.Musica.Where(x => x.MusicaId == musicaId).FirstOrDefault();
            if(_musica == null)
            {
                return NotFound();
            }
            _musica.Duracao = musica.Duracao;
            _musica.Nome = musica.Nome;
            

            _context.Update(_musica);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MusicaExists(musicaId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Album
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Album>> PostAlbum(Album album)
        {
            _context.Album.Add(album);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AlbumExists(album.AlbumId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAlbum", new { id = album.AlbumId }, album);
        }

        // POST: api/album/1/musica
        [HttpPost("{albumId}/Musica")]
        public async Task<IActionResult> PostMusica(string albumId, Musica musica)
        {
            var album = _context.Album.Where(x => x.AlbumId == albumId ).FirstOrDefault();
            if(album == null)
            {
                return NotFound();
            }
             musica.AlbumId = album.AlbumId;
             _context.Musica.Add(musica);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AlbumExists(musica.AlbumId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAlbum", new { id = album.AlbumId }, album);
        }

        // DELETE: api/Album/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum(string id)
        {
            var album = await _context.Album.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }

            _context.Album.Remove(album);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlbumExists(string id)
        {
            return _context.Album.Any(e => e.AlbumId == id);
        }

        private bool MusicaExists(string id)
        {
            return _context.Musica.Any(e => e.MusicaId == id);
        }
    }
}
