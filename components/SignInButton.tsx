import { signIn } from "@/auth"
 
export default function SignInButton() {
  return (
    <form 
      action={async () => {
        "use server"
        await signIn("github", {redirectTo: "/"})
      }}
    >
      <button className="border border-b-emerald-600 rounded p-4" type="submit">Signin with GitHub</button>
    </form>
  )
} 