import React from "react"

export const FunctionText: React.FC<{name: string, string?: boolean, arg: string | number, span?: boolean}> = ({
  name,
  string,
  arg,
  span
}) => {
  const functionStatementClassName = "text-amber-500"
  const content = <span>({(string ? (<span className="text-lime-300">&quot;</span>) : (null))}<span className={`${string ? "text-sky-500" : "text-green-300"} font-bold italic`}>{arg}</span>{(string ? (<span className="text-lime-300">&quot;</span>) : (null))})</span>
  return span ? <span className={functionStatementClassName}>{name}{content}</span> : <p className={functionStatementClassName}>{name}{content}</p>
}