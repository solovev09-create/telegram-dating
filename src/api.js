const API_URL = "https://your-server/api";

export async function getNextUser() {
  const res = await fetch(`${API_URL}/nextUser`, { credentials: "include" });
  return res.json();
}

export async function sendReaction(id, type) {
  await fetch(`${API_URL}/react`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, type }),
    credentials: "include"
  });
}
