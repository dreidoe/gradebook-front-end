function App() {
  return (
    <form className="mt-4 mt-4 flex flex-col items-center gap-y-2">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="rounded"
      />

      <label htmlFor="confirmPassword" className="sr-only">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="rounded"
      />
      {/* TODO: toggle between Register and Login */}
      <button
        type="submit"
        className="hover-bg-green-600 rounded bg-green-500 px-4 py-2 text-white"
      >
        Register
      </button>
    </form>
  );
}

export default App;
