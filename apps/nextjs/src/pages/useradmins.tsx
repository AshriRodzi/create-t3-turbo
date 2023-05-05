import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";
import { api, objId, type RouterOutputs } from "~/utils/api";

const PostCard: React.FC<{
  post: RouterOutputs["post"]["all"][number];
  onPostDelete?: () => void;
}> = ({ post, onPostDelete }) => {
  
  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-blue-800">{post.name}</h2>
        <p className="mt-2 text-sm text-green-800">{post.email}</p>
        <p className="mt-2 text-sm text-green-800">{post.role}</p>
        <p className="mt-2 text-sm text-green-800">{post.dateCreated.toISOString()}</p>
      </div>
      <div>
        <span
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={onPostDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

const CreatePostForm: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [id, setId] = useState("");
  const [settings, setSetting] = useState({
    navbarColour: "black",
    sidebarColour: "black",
    timezone: "Australia/Melbourne",
    multifactorStrategy: "email",
    enableMultifactor: false,
    notificationSound: true
  });
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [upviseAccounts, setUpviseAccounts] = useState([]);
  const [emailVerified, setEmailVerified] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [services, setServices] = useState({
    platformPortal: {
      teams: []
    },
    learningHub: {
      favourites: []
    },
    workshop: {
      teams: []
    },
    platformTracker: {
      teams: []
    },
    planner: {
      teams: []
    },
    headsUpDashboard: {
      teams: []
    },
    safety: {
      teams: []
    },
    costControl: {
      teams: []
    },
    quality: {
      teams: []
    }
  });
  const [resetPasswordExpires, setResetPasswordExpires] = useState(null);
  const [resetPasswordToken, setResetPasswordToken] = useState(null);
  const [hash, setHash] = useState(null);

  const { mutate, error } = api.useradmins.create.useMutation({
    async onSuccess() {
      setId('');
      setRole('');
      setPhoneNumber('');
      setJobTitle('');
      setEmail('');
      setName('');
      setPassword('');
      await utils.useradmins.all.invalidate();
    },
  });

  const { mutateAsync } = api.useradmins.update.useMutation({
    async onSuccess() {
      setId('');
      setRole('');
      setPhoneNumber('');
      setJobTitle('');
      setEmail('');
      setName('');
      setPassword('');
      await utils.useradmins.all.invalidate();
    },
  });

  return (
    <div className="flex w-full max-w-2xl flex-col p-4">

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Id for Update only"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}


      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.content}
        </span>
      )}


      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}      

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}


      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          mutate({
            id: objId(),
            settings: settings,
            role: role,
            phoneNumber: phoneNumber,
            jobTitle: jobTitle,
            email: email,
            name: name,
            password: password,
            dateCreated: new Date().toISOString(),
            upviseAccounts: upviseAccounts,
            lastActive: new Date().toISOString(),
            emailVerified: emailVerified,
            notifications: notifications,
            services: services,
            resetPasswordExpires: resetPasswordExpires,
            resetPasswordToken: resetPasswordToken,
            hash: hash
          });
        }}
      >
        Create
      </button>
      <br/>
      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          mutateAsync({
            id: id,
            settings: settings,
            role: role,
            phoneNumber: phoneNumber,
            jobTitle: jobTitle,
            email: email,
            name: name,
            password: password,
            dateCreated: new Date().toISOString(),
            upviseAccounts: upviseAccounts,
            lastActive: new Date().toISOString(),
            emailVerified: emailVerified,
            notifications: notifications,
            services: services,
            resetPasswordExpires: resetPasswordExpires,
            resetPasswordToken: resetPasswordToken,
            hash: hash
          });
        }}
      >
        Update
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = api.useradmins.all.useQuery();
  //const postQuery = api.useradmins.byId.useQuery({id : '63e186a3e0c8720e42d7efc4'});
  //const postQuery = api.useradmins.byEmail.useQuery({email : 'karen.kneebone@biomix.com.au'});
  const deletePostMutation = api.useradmins.delete.useMutation({
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
            Useradmins Table
          </h1>
          <AuthShowcase />

          <CreatePostForm />

          {postQuery.data ? (
            <div className="w-full max-w-2xl">
              {postQuery.data?.length === 0 ? (
                <span>There are no posts!</span>
              ) : (
                <div className="flex h-[40vh] justify-center overflow-y-scroll px-4 text-2xl">
                  <div className="flex w-full flex-col gap-4">
                    {postQuery.data?.map((p) => {
                      return (
                        <PostCard
                          key={p.id}
                          post={p}
                          onPostDelete={() => deletePostMutation.mutate(p.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
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
