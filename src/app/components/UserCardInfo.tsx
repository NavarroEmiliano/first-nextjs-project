const UserCardInfo = () => {
  return (
    <article className="flex flex-wrap rounded-2xl bg-sky-900 p-8 gap-8">
      <div className="h-20 w-20 min-w-20 rounded-full bg-sky-500"></div>
      <div className="flex flex-col justify-between pl-4 text-white md:flex-row">
        <p className="text-2xl font-semibold">The Octocat</p>
        <p>@octocat</p>
        <p>Joined 25 Jan 2011</p>
      </div>
      <div className="flex flex-col gap-8 md:pl-24">
        <p className="tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
          adipisci fuga tenetur debitis quas odio vel! Dicta nam dolor incidunt
          corrupti nihil voluptatum sapiente, quod dolores, hic ex tempora?
        </p>
        <div className="flex justify-around border p-2 text-white">
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
        <div className="flex flex-col gap-2">
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
