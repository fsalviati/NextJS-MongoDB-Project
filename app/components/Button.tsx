export default function Button({
  text,
  onClickFunction,
}: {
  text: string;
  onClickFunction: () => void;
}) {
  return (
    <button
      className="mx-2 rounded-lg border px-4 py-2 hover:border-2"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
