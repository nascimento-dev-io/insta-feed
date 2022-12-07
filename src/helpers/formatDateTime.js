export default function formatDateTime(date) {
  return (
    new Date(date).toLocaleDateString() +
    " " +
    new Date(date).toLocaleTimeString()
  );
}
