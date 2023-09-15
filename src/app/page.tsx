export default function Home() {
  const prompt = [
    "Last login: Sun Sep 10 22:39:19 on ttys000",
    " ",
    "################################",
    "# Welcome to kazuki19992.com!! #",
    "################################",
  ];
  return (
    <div className="h-full w-full bg-gray-950 p-3 font-mono text-gray-400">
      {prompt.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
