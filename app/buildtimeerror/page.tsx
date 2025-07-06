export default function BuildTimeErrorPage() {
  // TypeScript build time error by referencing a non-existing variable
  const result: string = nonExistentVariable;

  return (
    <div>
      <h1>This page triggers a build time error.</h1>
      <p>Value of result: {result}</p>
    </div>
  );
}
