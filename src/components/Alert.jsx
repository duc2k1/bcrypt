export default function Alert({ content, result = true }) {
  return (
    <div
      className={
        "mt-2 alert  alert-" +
        (result ? "success" : "danger") +
        " alert-dismissible fade show"
      }
      role="alert"
      style={{ wordWrap: "break-word" }}
    >
      {content + ""}
    </div>
  );
}
