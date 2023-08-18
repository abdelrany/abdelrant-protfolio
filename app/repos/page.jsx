import Link from "next/link";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";
import Hero from "../components/Hero";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/abdelrany/repos", {
    next: {
      revalidate: 60,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const repos = await response.json();
  return repos;
}

const RepoCard = ({ repo }) => {
  return (
    <div className="p-6 border border-lightText hover:bg-white rounded-md mb-4">
      <h3 className="text-base text-lightText mb-1">{repo.name}</h3>
      <p className="">{repo.description}</p>
      <div className="flex items-center justify-between mt-4">
        {/* <span className="flex items-center text-sm text-gray-600">
          <FaStar className="mr-1" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center text-sm">
          <FaCodeBranch className="mr-1" /> {repo.forks_count}
        </span> */}
        <span className="flex items-center text-sm">
          <FaCode className="mr-1" />
          {repo?.languages?.map((lang, index) => (
            <span key={index} className="mr-1">
              {lang}
            </span>
          ))}
        </span>
      </div>
      <div className="mt-4">
        <Link href={`/code/repos/${repo.name}`}>
          <span className="text-secondary-light hover:underline">
            View Repository
          </span>
        </Link>
      </div>
    </div>
  );
};

const Repositories = async () => {
  const repos = await fetchRepos();
  return (
    <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
      {/* <Hero /> */}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Repositories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;

// Usage in a page component
// import Repositories from "../path/to/Repositories";
//
// function MyPage({ repos }) {
//   return <Repositories repos={repos} />;
// }
//
// export async function getStaticProps() {
//   const repos = await fetchRepos();
//   return {
//     props: {
//       repos,
//     },
//   };
// }
