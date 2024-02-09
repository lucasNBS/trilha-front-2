import { SocialMediaList, SocialMediaItem, Link } from "./style"

export default function SocialMedia() {
  return (
    <SocialMediaList>
      <SocialMediaItem>
        <Link href="#">Instagram</Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link href="#">Facebook</Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link href="#">Youtube</Link>
      </SocialMediaItem>
    </SocialMediaList>
  )
}
