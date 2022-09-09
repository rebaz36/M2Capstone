/* eslint-disable quotes */
const likesApi = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Uiq6q7N2Q4c9UNImCjVq/likes";

export const getLikes = async () => {
  const response = await fetch(likesApi);
  const showLikes = await response.json();
  return showLikes;
};

export const putLikes = async (idShow) => {
  await fetch(likesApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_id: idShow }),
  });
};