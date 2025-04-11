export default function DamMap() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Flood Hazard Map (India)</h2>
      <div className="w-full h-[75vh] border-2 border-blue-200 rounded-lg overflow-hidden">
        <iframe
          src="https://ee-nallajarlag.projects.earthengine.app/view/india-flood-hazard-map "
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Flood Hazard India"
        ></iframe>
      </div>
    </div>
  );
}
