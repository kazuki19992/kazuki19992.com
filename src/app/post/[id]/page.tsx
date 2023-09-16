import { PageTitle } from "./components";

const Page = () => {
  return (
    <div className="w-full">
      <PageTitle title="Vite + NEXT.js + microCMS + Tailwindで作り直した" lastUpdate={new Date()}/>

      <div className="container mx-auto p-3">
        {/* この内容はダミーの内容 */}

        <h2 className="mb-1 mt-2 text-2xl font-bold">はじめに</h2>
        <p>これはダミーの記事です。<br /></p>
      </div>
    </div>
  );
};

export default Page;
