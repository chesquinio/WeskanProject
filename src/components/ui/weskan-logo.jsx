export default function WeskanLogo({ height = "10", width = "10" }) {
  return (
    <div className={`h-${height} w-${width}`}>
      <img
        src="/weskan-logo.png"
        alt="Weskan Logo"
        className="object-fit rounded"
      />
    </div>
  );
}
