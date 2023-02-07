export default function InputText() {
  return (
    <>
      <label htmlFor="username" className="sr-only">
        Username
      </label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="rounded"
      />
    </>
  );
}
