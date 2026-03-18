import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function UserAvatar() {
  return (
    <Avatar size="lg" className="cursor-pointer">
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}

