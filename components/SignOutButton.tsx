
import { signOut } from "@/auth"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="border border-b-emerald-600 rounded p-4" type="submit"> SignOut </button>
    </form>
  )
} 