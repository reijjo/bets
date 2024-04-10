const Homepage = () => {
  return (
    <main>
      <h1 style={{ color: "var(--primary-500)" }}>primary</h1>

      <h1 style={{ color: "var(--secondary-500)" }}>secondary</h1>

      <h1 style={{ color: "var(--accent-500)" }}>accent</h1>

      <p style={{ color: "var(--info)" }}>Info</p>
      <p style={{ color: "var(--success)" }}>Success</p>
      <p style={{ color: "var(--warning)" }}>Warning</p>
      <p style={{ color: "var(--error)" }}>Error</p>
      <p style={{ color: "white" }}>Error</p>
      <p style={{ color: "black" }}>Error</p>
    </main>
  );
};

export default Homepage;
