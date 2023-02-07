import Button from "./components/button";
import InputText from "./components/input-text";
function App() {
  return (
    <form className="flex h-screen flex-col items-center justify-center">
      <InputText label="username" id="username" />

      <InputText label="password" id="password" type="password" />
      <InputText
        label="Confirm password"
        id="confirmPassword"
        type="password"
      />

      <Button text="Sign Up" />
    </form>
  );
}

export default App;
