import { AuthOptions, CallbacksOptions, type Awaitable } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
type SignIncallback = Pick<CallbacksOptions, 'signIn'>['signIn']
const githubProvider = GithubProvider({
  clientId: process.env.GITHUB_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
})

const signIn: SignIncallback = ({ user }) => {
  const { id, name, email, image } = user
  return true
}

const options: AuthOptions = {
  providers: [githubProvider],
  callbacks: {
    signIn,
  },
}
export default options
