export default function WeskanLogo({ height, width }) {
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
