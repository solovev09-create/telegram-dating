import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    WebApp.ready();
    setIsReady(true);
  }, []);

  if (!isReady) return <>Loading...</>;

  const user = WebApp.initDataUnsafe.user;

  return (
    <div style={{ padding: 20 }}>
      <h2>Добро пожаловать, {user?.first_name} 👋</h2>
      <button onClick={() => WebApp.sendData("open_profile")}>
        Заполнить профиль
      </button>
      <button onClick={() => WebApp.sendData("start_matching")}>
        Начать поиск 🧡
      </button>
    </div>
  );
}
