export async function getPhones() {
  const response = await fetch(`${process.env.API}/client/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("Failed => ", response);
    throw new Error("Failed to fetch phones");
  }

  const data = await response.json();
  return data; // {blogs, currentPage, totalPages}
}

export default async function Phone() {
  const { phones } = await getPhones();
  console.log(phones);
  return (
    <>
      {phones.map((phone) => (
        <div className="phone">
          <div>{phone.phone}</div>
          <div className="date">{phone.createdAt}</div>
        </div>
      ))}
    </>
  );
}
