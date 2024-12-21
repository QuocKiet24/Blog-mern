import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/test"} className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          dolores?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Admin</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat fuga
          iure impedit quam minima doloribus sint dolores magnam numquam
          deleniti quo minus quis veniam repudiandae corrupti, voluptatibus,
          velit asperiores. Adipisci?
        </p>
        <Link to="/test" className="underline text-sm text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
