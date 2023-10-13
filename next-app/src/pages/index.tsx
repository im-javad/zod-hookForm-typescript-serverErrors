import { useState } from "react";
import Form from "../Components/Form";

export default function withoutReactHookForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <section id="form">
      <div className="container m-auto px-4">
        <form>
          <Form
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        </form>
      </div>
    </section>
  );
}
