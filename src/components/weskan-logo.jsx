export default function WeskanLogo({ circle }) {
  return (
    <div className={`h-full w-full`}>
      <img
        src="/weskan-logo.png"
        alt="Weskan Logo"
        className={`object-fit ${circle ? "rounded-full" : "rounded"}`}
      />
    </div>
  );
}
