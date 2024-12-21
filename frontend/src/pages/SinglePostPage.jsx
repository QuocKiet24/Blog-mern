import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col lg:w-3/5 gap-8 ">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Admin</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beatae iusto doloremque aliquid. Natus, labore.
          </p>
        </div>
        <div className="hidden lg:block w-2/5 ">
          <Image
            src="postImg.jpeg"
            className="rounded-3xl object-cover"
            w="600"
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-12 md:flex-row justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="size-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem, ipsum dolor.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
