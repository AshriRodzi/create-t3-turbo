import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";
import { api, objId, type RouterOutputs } from "~/utils/api";
import { useRouter } from 'next/router';

const CreatePostForm: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex w-full max-w-2xl flex-col p-4">
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/users');
        }}
      >
        Users
      </button>
        <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/useradmins');
        }}
      >
        Useradmins
      </button>
        <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/teams');
        }}
      >
        Teams
      </button>
      <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/supporttickets');
        }}
      >
        Support Tickets
      </button>
      <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/sessions');
        }}
      >
        Sessions
      </button>
      <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          router.push('/organisations');
        }}
      >
        Organisations
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = api.users.sanspaper.useQuery();
  //const postQuery = api.users.byId.useQuery({id : '63e186a3e0c8720e42d7efc4'});
  //const postQuery = api.users.byEmail.useQuery({email : 'karen.kneebone@biomix.com.au'});
  const deletePostMutation = api.users.delete.useMutation({
    onSettled: () => postQuery.refetch(),
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Prisma with TRPC Example
          </h1>
          <AuthShowcase />

          <CreatePostForm />
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();

  const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!session?.user },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {session?.user && (
        <p className="text-center text-2xl text-white">
          {session && <span>Logged in as {session?.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
