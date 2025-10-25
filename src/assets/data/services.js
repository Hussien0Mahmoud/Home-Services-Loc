const API_BASE = 'http://localhost:3000'; // أو استخدم VITE_API_URL لو عايز

export async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) throw new Error(`Failed to fetch services: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('fetchServices error:', err);
    // ممكن ترجّع مصفوفة فاضية بدل services
    return [];
  }
}
