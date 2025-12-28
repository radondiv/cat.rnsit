
export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 h1-liquid">Event: {id}</h1>
      <p className="opacity-80">Event details will load from Firestore.</p>
    </div>
  );
}
