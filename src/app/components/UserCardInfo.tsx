const UserCardInfo = () => {
  return (
    <article className="flex flex-wrap gap-y-8 rounded-2xl bg-slate-900 p-8 text-white">
      <div className="flex flex-auto">
        <div className="h-20 w-20 min-w-20 flex-none rounded-full bg-sky-500"></div>
        <div className="flex-auto justify-between pl-4 md:grid md:grid-cols-2 md:items-center">
          <p className="text-2xl font-semibold">The Octocat</p>
          <p className="md:text-right text-blue-700">@octocat</p>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:pl-24">
        <p className="tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
          adipisci fuga tenetur debitis quas odio vel! Dicta nam dolor 
        </p>
        <div className="flex justify-around rounded-xl bg-slate-950 p-4 ">
          <article>
            <p>Repos</p>
            <p className="font-bold">8</p>
          </article>
          <article>
            <p>Followers</p>
            <p className="font-bold">3938</p>
          </article>
          <article>
            <p>Following</p>
            <p className="font-bold">9</p>
          </article>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
          <p>San Francisco</p>
          <p>https://github.blog</p>
          <p>Not Available</p>
          <p>@github</p>
        </div>
      </div>
    </article>
  );
};

export default UserCardInfo;
