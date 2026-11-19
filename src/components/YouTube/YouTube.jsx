import { useState } from 'react'
import './YouTube.css'

const videos = [
  {
    id: 'cjNgz808cn4',
    language: 'Spanish',
    caption: 'WATCH IN SPANISH 👆🏼',
  },
  {
    id: 'tY6g558F0mE',
    language: 'English',
    caption: 'WATCH IN ENGLISH 👆🏼',
  },
]

function YouTube() {
  const [playingVideo, setPlayingVideo] = useState(null)

  return (
    <section className="youtube" aria-labelledby="youtube-heading">
      <div className="youtube__intro">
        <p className="youtube__eyebrow">Learn between lessons</p>
        <h2 className="youtube__heading" id="youtube-heading">
          Learn Spanish on YouTube.
        </h2>
        <p className="youtube__description">
          Choose a presentation and keep learning with Spanish Academy JARIO.
        </p>
      </div>

      <div className="youtube__videos">
        {videos.map((video) => (
          <article className="youtube__video-card" key={video.id}>
            <div className="youtube__video">
              {playingVideo === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={`Spanish Academy JARIO presentation in ${video.language}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  className="youtube__play"
                  type="button"
                  onClick={() => setPlayingVideo(video.id)}
                  aria-label={`Play the presentation in ${video.language}`}
                >
                  <img
                    className="youtube__thumbnail"
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="youtube__play-overlay">
                    <span className="youtube__play-icon" aria-hidden="true">
                      ▶
                    </span>
                    <span>Play presentation in {video.language}</span>
                  </span>
                </button>
              )}
            </div>
            <h3 className="youtube__caption">{video.caption}</h3>
            <p className="youtube__fallback">
              Video not loading?{' '}
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube <span aria-hidden="true">↗</span>
              </a>
            </p>
          </article>
        ))}
      </div>

      <div className="youtube__channel">
        <h3>Visit our channel</h3>
        <a
          className="youtube__channel-link"
          href="https://www.youtube.com/@Linguatoons"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="youtube__logo"
            viewBox="0 0 24 17"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M23.5 2.7a3 3 0 0 0-2.1-2.1C19.6 0 12 0 12 0S4.4 0 2.6.6A3 3 0 0 0 .5 2.7 31 31 0 0 0 0 8.5a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.4 17 12 17 12 17s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8Z"
            />
            <path fill="#e5253b" d="m9.6 12.1 6.3-3.6-6.3-3.6v7.2Z" />
          </svg>
          <span>Visit LINGUATOONS on YouTube</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default YouTube
