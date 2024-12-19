const UserCardInfo = () => {
  return (
    <article className="rounded-2xl bg-sky-900 p-4">
      <div className="flex gap-4">
        <div className="h-20 w-20 rounded-full bg-sky-500"></div>
        <div className="text-white">
          <p>The Octocat</p>
          <p>@octocat</p>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
        adipisci fuga tenetur debitis quas odio vel! Dicta nam dolor incidunt
        corrupti nihil voluptatum sapiente, quod dolores, hic ex tempora?
      </p>
    </article>
  );
};

export default UserCardInfo;
