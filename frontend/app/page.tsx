import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {!session ? (
        <>
          <h1 className="text-3xl font-bold">You are not signed in</h1>
          <button
            onClick={() => signIn()}
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Sign in
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Welcome, {session.user?.email}</h1>
          <button
            onClick={() => signOut()}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
