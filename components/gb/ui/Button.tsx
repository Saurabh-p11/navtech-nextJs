export default function Button({ className, btnText }: { className?: string; btnText: string }) {
  return (
    <button
      type="button"
      className={`${className ?? ''}  px-5 py-2 rounded shadow cursor-pointer font-medium`}
    >
      {btnText}
    </button>
  );
}
