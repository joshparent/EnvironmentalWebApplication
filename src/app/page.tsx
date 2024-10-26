export default function Home() {
  return (
      <div className="flex justify-center items-center min-h-screen p-8">
        <iframe
            src="http://localhost:3838"
            style={{ width: '100%', height: '100vh', border: 'none' }}
            title="R Shiny Application"
        />
      </div>
  );
}
