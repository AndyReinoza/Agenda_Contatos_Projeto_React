import "./styles.css";

import ContactCard from "./components/ContactCard";
import Header from "./components/header";
import CreateCardButton from "./components/CreateCardButton";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <CreateCardButton />
    </div>
  );
}
