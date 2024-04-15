import "./App.css";
import { FollowCard } from "./components/TwitterFollowCard";
import { suggestionsList } from "./constant/suggestions";

export function App() {
  const listSuggest = suggestionsList.map((suggestion) => {
    return <FollowCard {...suggestion} />;
  });

  return (
    <div className="container-app">
      <h1>My twitter card</h1>
      {listSuggest}
    </div>
  );
}
