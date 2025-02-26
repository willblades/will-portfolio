import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
    post: BlogPost
}

export default function ListItems({post} : Props) {
    const {id, title, date} = post
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link className="underline hover:text-accent" href={`/posts/${id}`}>{title}</Link>
      <br />
      <p className="text-sm mt-1">{getFormattedDate(date)}</p>
    </li>
  )
}