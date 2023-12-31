export default async function handler(req, res) {
  const user = decodeURIComponent(req.query.user);

  const response = await fetch(`https://dummyjson.com/users/${req.query.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: user,
  })
    .then(async (res) => {
      return {
        ok: res.ok,
        data: await res.json(),
      };
    })
    .catch((error) => {
      return error;
    });

  res.status(res.statusCode).json(response);
}
