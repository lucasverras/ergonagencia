interface FlyVideoProps {
  src: string
  className?: string
  poster?: string
  title: string
}

// autoplay/loop background footage — muted + playsInline is required for
// iOS Safari to autoplay at all, and title provides the accessible name a
// silent decorative <video> otherwise lacks
export default function FlyVideo({ src, className, poster, title }: FlyVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={title}
      src={src}
    />
  )
}
