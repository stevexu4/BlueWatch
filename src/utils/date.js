export const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
