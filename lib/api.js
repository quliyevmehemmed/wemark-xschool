export async function getXSchoolData() {
  const response = await fetch(
    "https://admin.wemark.pro/api/tasks-xschool/",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("API məlumatlarını əldə etmək mümkün olmadı");
  }

  return response.json();
}