import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { getNextUser, sendReaction } from "./api";

export default function Browse() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadProfile() {
    setLoading(true);
    const data = await getNextUser();
    setProfile(data);
    setLoading(false);
  }

  async function react(type) {
    await sendReaction(profile.id, type);
    loadProfile();
  }

  useEffect(() => {
    WebApp.ready();
    loadProfile();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (!profile) return <p>Анкеты закончились 🔄</p>;

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <img 
        src={profile.photo} 
        style={{ width: "100%", borderRadius: 12, marginBottom: 12 }} 
        alt=""
      />

      <h2>{profile.name}, {profile.age}</h2>
      <p>{profile.bio}</p>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button 
          style={{ flex: 1 }} 
          onClick={() => react("skip")}
        >
          ⛔ Пропустить
        </button>

        <button 
          style={{ flex: 1, fontWeight: "bold" }} 
          onClick={() => react("like")}
        >
          ❤️ Лайк
        </button>
      </div>
    </div>
  );
}
