export const loadStoredApps = () => {
  try {
    const data = localStorage.getItem("app");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
