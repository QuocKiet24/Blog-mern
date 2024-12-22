import ReactQuill from "react-quill-new";

const WritePage = () => {
  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Please login to write</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          name="title"
          placeholder="Enter a title"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select name="cat" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="Description"
        />

        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
          placeholder="Write your post here..."
        />

        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WritePage;
