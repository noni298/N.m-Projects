
const AlertMessage = ({ message, type }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-${type} text-center py-2`} role="alert">
      {message}
    </div>
  );
};
export default AlertMessage;