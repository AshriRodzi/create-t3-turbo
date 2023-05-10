import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";
import { api, objId, type RouterOutputs } from "~/utils/api";
import { log } from "console";

const PostCard: React.FC<{
  post: RouterOutputs["post"]["all"][number];
  onPostDelete?: () => void;
}> = ({ post, onPostDelete }) => {
  
  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-blue-800">{post.name}</h2>
        <p className="mt-2 text-sm text-green-800">{post.address}</p>
        <p className="mt-2 text-sm text-green-800">{post.partnerCode}</p>
        <p className="mt-2 text-sm text-green-800">{post.phone}</p>
        <p className="mt-2 text-sm text-green-800">{post.dateCreated?.toISOString()}</p>
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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [services, setServices] = useState({
    upvise: {
      enabled: true,
      account: {
        backupToken: "86nCArk5tN4-Yi8rlKFKQW39XWdS62sF0ITjWsPK3TmnSRjycyEFhOz_U4WYR8fq0",
        companyId: 179778,
        companyName: "Platformers",
        countryCode: "AU",
        creationDate: 1357213599250,
        dbName: "2013\\1\\3\\179778.db",
        displayName: "Marcus van Enk",
        email: "Marcus@platformers.com.au",
        emailDropbox: "marcus.448802.s2@upvise.com",
        expiryDate: -1,
        language: "EN",
        partnercode: "VM",
        privilege: "1",
        shareToken: "k7NdU2vSsqH9WGngaarwaii-a99ao8kvYjRU1tr5X2vLD7ACM0ICqesfX4R4GQrU0",
        token: "+OKjBTMiokEXtdTmSdQkw6sVziFJBpSi"
      },
      email: "marcus@platformers.com.au",
      password: "d3ab1a24d75a02f8ab5e7a4c6f",
      url: "https://s2.upvise.com/",
      adminEyesOnly: true,
      userCap: 500
    },
    sanspaper: {
      enabled: true,
      upviseTemplates: [],
      organisationCreated: true
    },
    google: {
      enabled: false
    },
    customerPortal: {
      enabled: false,
      groups: []
    },
    gsuite: {
      customerDomain: "verticalmatters.com.au",
      enabled: true,
      userCap: 500
    },
    platformIntegrator: {
      enabled: false,
      templates: []
    },
    domainsService: {
      domains: [],
      enabled: false
    },
    platformPortal: {
      teams: [],
      enabled: false
    },
    managementDashboard: {
      enabled: false,
      configurations: []
    },
    workshop: {
      enabled: true,
      equipmentCategories: [],
      serviceStatusLastPrestartField: {},
      selectedFieldSLAS: {},
      selectedFieldStages: {},
      customJobsFilter: []
    },
    planner: {
      config: {
        endDate: false,
        jobName: false,
        location: false,
        startDate: false
      },
      enabled: true
    },
    platformTracker: {
      enabled: true
    },
    costControl: {
      enabled: true
    },
    headsUpDashboard: {
      enabled: true
    },
    quality: {
      enabled: true
    },
    safety: {
      enabled: true
    },
    workbench: {
      enabled: false,
      userCap: 100
    },
    sanspaperconnect: {
      enabled: true,
      organisationCreated: true
    }
  });
  const [billing, setbilling] = useState({
    upviseInvoicing: {
      customFields: "{}"
    },
    upviseUserPrice: 61,
    upviseUserDiscount: 0,
    sansPaperUserPrice: 30,
    sansPaperUserDiscount: 0,
    gsuiteUserPrice: 20,
    gsuiteUserDiscount: 0,
    autoInvoice: false,
    date: "eom",
    period: 7,
    recipients: [],
    _id: "5e84335bd6d5f5004ca1512b",
    workbenchUserDiscount: 0,
    workbenchUserPrice: 20,
    sansPaperConnectUserDiscount: 0,
    sansPaperConnectUserPrice: 30
  });
  const [partnerCode, setPartnerCode] = useState("");
  const [supportPlans, setSupportPlans] = useState("");
  const [userCap, setUserCap] = useState(500);
  const [logo, setLogo] = useState("5d9544e31e1e0700332efc9f");
  const [bokDate, setBokDate] = useState(null);
  const [offlineDate, setOfflineDate] = useState(null);

  const [id, setId] = useState("");

  const { mutate, error } = api.organisations.create.useMutation({
    async onSuccess() {
      setId('');
      setName('');
      setAddress('');
      setPhone('');
      setWebsite('');
      setPartnerCode('');
      setSupportPlans('');
      await utils.organisations.all.invalidate();
    },
  });

  const { mutateAsync } = api.organisations.update.useMutation({
    async onSuccess() {
      setId('');
      setName('');
      setAddress('');
      setPhone('');
      setWebsite('');
      setPartnerCode('');
      setSupportPlans('');
      await utils.organisations.all.invalidate();
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
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.content}
        </span>
      )}


      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Website"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}      

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={supportPlans}
        onChange={(e) => setSupportPlans(e.target.value)}
        placeholder="Support Plans"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      <input
        className="mb-2 rounded bg-white/10 p-2 text-white"
        value={partnerCode}
        onChange={(e) => setPartnerCode(e.target.value)}
        placeholder="Partner Code"
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
            services: services,
            billing: billing, 
            partnerCode: partnerCode, 
            name: name, 
            dateCreated: new Date().toISOString(), 
            supportPlans: supportPlans, 
            address: address, 
            phone: phone, 
            website: website, 
            userCap: userCap, 
            logo: logo, 
            bokDate: bokDate, 
            offlineDate: offlineDate 
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
            services: services,
            billing: billing, 
            partnerCode: partnerCode, 
            name: name, 
            dateCreated: new Date().toISOString(), 
            supportPlans: supportPlans, 
            address: address, 
            phone: phone, 
            website: website, 
            userCap: userCap, 
            logo: logo, 
            bokDate: bokDate, 
            offlineDate: offlineDate 
          });
        }}
      >
        Update
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = api.organisations.all.useQuery();
  //const postQuery = api.organisations.byId.useQuery({id : '63e186a3e0c8720e42d7efc4'});
  const deletePostMutation = api.organisations.delete.useMutation({
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
            Teams Table
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
