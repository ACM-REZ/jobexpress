export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  return `http://5164.c.serverhost.name/${src}`
  // return `http://localhost:3000/${src}`
  // return `https://5db7-89-23-122-180.ngrok-free.app/${src}`
}