import { FunctionText } from "@/components";


export default function Home() {
  const prompt = [
    "Last login: Sun Sep 10 22:39:19 on ttys000",
    "################################",
    "# Welcome to kazuki19992.com!! #",
    "################################",
  ];
  return (
    <div className="h-full w-full bg-gray-950 p-3 font-mono text-gray-400">
      <div className="mb-12">
      {prompt.map((text, index) => (
        <p key={index}>{text}</p>
        ))}
      </div>

      <p className="mb-10">import Twitter as X from &quot;Twitter.com&quot;;</p>

      <div className="flex gap-5">
        <img className="h-16 w-16 rounded-full" src="/icon.JPG" />
        <div>
          <p className="font-bold text-yellow-400">カズ之助</p>
          <FunctionText name="name" string arg={"Kazuki Kushida"} />
          <p>X.<FunctionText name="id" string arg="@kazuki19992" span /></p>
        </div>
      </div>

    </div>
  );
}
